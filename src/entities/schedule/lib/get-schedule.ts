import { scheduleApi } from '@api'
import { IFullSchedule, ISubject, IWeekEventSchedule, IWeekSchedule, User } from '@api/model'
import createFullName from '@features/home/lib/create-full-name'
import { IWeekDays, WEEK_DAYS } from '@shared/consts'
import { getCurrentDay } from '@shared/ui/calendar/ui/day/lib/get-current-day'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'

export const EMPTY_WEEK = Object.keys(WEEK_DAYS).reduce((acc, el) => {
    acc[el as keyof IWeekDays] = []
    return acc
}, {} as IWeekEventSchedule)

type GetScheduleResult = { schedule: IFullSchedule; teachers: string[] }

export const SCHEDULE_NO_RESULT: GetScheduleResult = {
    schedule: {
        today: [],
        week: EMPTY_WEEK,
        semestr: EMPTY_WEEK,
        session: {},
    },
    teachers: [],
}

const getSchedule = async (user: User | string | null, group?: string): Promise<GetScheduleResult> => {
    const isUserAsString = typeof user === 'string'
    const shouldLoadStudentSchedule = (!isUserAsString && !user?.subdivisions) || !!group?.length
    const teachers = new Set<string>()
    const teacherName = !isUserAsString
        ? createFullName({
              name: user?.name ?? '',
              surname: user?.surname ?? '',
              patronymic: user?.patronymic ?? '',
          })
        : ''

    const response = shouldLoadStudentSchedule
        ? await scheduleApi.get(group ?? (user as User).group ?? '')
        : isUserAsString
        ? await scheduleApi.getTeachers(user)
        : await scheduleApi.getTeachers(teacherName)

    const sessionResponse = shouldLoadStudentSchedule
        ? await scheduleApi.getSession()
        : isUserAsString
        ? await scheduleApi.getTeachersSession(user)
        : await scheduleApi.getTeachersSession(teacherName)

    const sessionSchedule: { [key: string]: any } | null = {}
    const semestrSchedule: { [key: string]: any } = {}
    const currentWeekSchedule: IWeekSchedule = {
        monday: { lessons: [] },
        tuesday: { lessons: [] },
        wednesday: { lessons: [] },
        thursday: { lessons: [] },
        friday: { lessons: [] },
        saturday: { lessons: [] },
    }

    if (response.data.status !== 'error') {
        for (const key in response.data) {
            if (key !== 'Sunday') {
                const transformedKey = key.charAt(0).toLowerCase() + key.slice(1)

                semestrSchedule[transformedKey] = shouldLoadStudentSchedule
                    ? response.data[key]
                    : { lessons: response.data[key] }
            }
        }

        for (const [key, value] of Object.entries(semestrSchedule)) {
            value?.lessons.forEach((lesson: ISubject) => {
                lesson.teachers.forEach((t) => {
                    if (t.length !== 0) teachers.add(t)
                })
            })
            currentWeekSchedule[key as keyof IWeekSchedule].lessons = getCurrentDaySubjects(value?.lessons)
        }
    }

    if (sessionResponse.data.status !== 'error') {
        for (const key in sessionResponse.data) {
            if (shouldLoadStudentSchedule) {
                sessionSchedule[key] = sessionResponse.data[key]
            } else {
                if (sessionResponse.data[key].length) {
                    sessionSchedule[key] = { lessons: sessionResponse.data[key] }
                }
            }
        }
    }

    const hasError = !(Object.keys(response.data).length && response.data.status !== 'error')

    const currentDay = Object.keys(currentWeekSchedule)[getCurrentDay()] as keyof IWeekSchedule
    const currentDaySchedule = currentWeekSchedule[currentDay]

    if (hasError) {
        return SCHEDULE_NO_RESULT
    }

    return {
        schedule: {
            today: getCalendarSchedule(currentDaySchedule.lessons, WEEK_DAYS.friday.short),
            week: {
                monday: getCalendarSchedule(currentWeekSchedule.monday.lessons, WEEK_DAYS.monday.short),
                tuesday: getCalendarSchedule(currentWeekSchedule.tuesday.lessons, WEEK_DAYS.tuesday.short),
                wednesday: getCalendarSchedule(currentWeekSchedule.wednesday.lessons, WEEK_DAYS.wednesday.short),
                thursday: getCalendarSchedule(currentWeekSchedule.thursday.lessons, WEEK_DAYS.thursday.short),
                friday: getCalendarSchedule(currentWeekSchedule.friday.lessons, WEEK_DAYS.friday.short),
                saturday: getCalendarSchedule(currentWeekSchedule.saturday.lessons, WEEK_DAYS.saturday.short),
            },
            semestr: {
                monday: getCalendarSchedule(semestrSchedule.monday.lessons, WEEK_DAYS.monday.short),
                tuesday: getCalendarSchedule(semestrSchedule.tuesday.lessons, WEEK_DAYS.tuesday.short),
                wednesday: getCalendarSchedule(semestrSchedule.wednesday.lessons, WEEK_DAYS.wednesday.short),
                thursday: getCalendarSchedule(semestrSchedule.thursday.lessons, WEEK_DAYS.thursday.short),
                friday: getCalendarSchedule(semestrSchedule.friday.lessons, WEEK_DAYS.friday.short),
                saturday: getCalendarSchedule(semestrSchedule.saturday.lessons, WEEK_DAYS.saturday.short),
            },
            session: sessionSchedule,
        },
        teachers: Array.from(teachers),
    }
}

export default getSchedule
