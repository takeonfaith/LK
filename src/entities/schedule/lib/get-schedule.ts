import { scheduleApi } from '@api'
import { IFullSchedule, IWeekSchedule, User } from '@api/model'
import createFullName from '@features/home/lib/create-full-name'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'

const NO_RESULT = {
    today: null,
    week: null,
    semestr: null,
    session: null,
}

const getSchedule = async (user: User | string | null, group?: string): Promise<IFullSchedule> => {
    const isName = typeof user === 'string'
    const shouldLoadStudentSchedule = (!isName && !user?.subdivisions) || !!group?.length
    const response = shouldLoadStudentSchedule
        ? await scheduleApi.get(group ?? (user as User).group ?? '')
        : isName
        ? await scheduleApi.getTeachers(user)
        : await scheduleApi.getTeachers(
              createFullName({ name: user.name, surname: user.surname, patronymic: user.patronymic }),
          )

    const sessionResponse = shouldLoadStudentSchedule
        ? await scheduleApi.getSession()
        : isName
        ? await scheduleApi.getTeachersSession(user)
        : await scheduleApi.getTeachersSession(
              createFullName({
                  name: user?.name ?? '',
                  surname: user?.surname ?? '',
                  patronymic: user?.patronymic ?? '',
              }),
          )
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
            currentWeekSchedule[key as keyof IWeekSchedule].lessons = getCurrentDaySubjects(value.lessons)
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

    const currentDay = Object.keys(currentWeekSchedule)[new Date().getDay() - 1] as keyof IWeekSchedule
    const currentDaySchedule = currentWeekSchedule[currentDay]

    if (hasError) {
        return NO_RESULT
    }

    return {
        today: getCalendarSchedule(currentDaySchedule.lessons),
        week: {
            monday: getCalendarSchedule(currentWeekSchedule.monday.lessons),
            tuesday: getCalendarSchedule(currentWeekSchedule.tuesday.lessons),
            wednesday: getCalendarSchedule(currentWeekSchedule.wednesday.lessons),
            thursday: getCalendarSchedule(currentWeekSchedule.thursday.lessons),
            friday: getCalendarSchedule(currentWeekSchedule.friday.lessons),
            saturday: getCalendarSchedule(currentWeekSchedule.saturday.lessons),
        },
        semestr: {
            monday: getCalendarSchedule(semestrSchedule.monday.lessons),
            tuesday: getCalendarSchedule(semestrSchedule.tuesday.lessons),
            wednesday: getCalendarSchedule(semestrSchedule.wednesday.lessons),
            thursday: getCalendarSchedule(semestrSchedule.thursday.lessons),
            friday: getCalendarSchedule(semestrSchedule.friday.lessons),
            saturday: getCalendarSchedule(semestrSchedule.saturday.lessons),
        },
        session: null,
    }
}

export default getSchedule
