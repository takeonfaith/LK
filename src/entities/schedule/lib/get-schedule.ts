import { scheduleApi } from '@api'
import { IModules, ISessionSchedule, IWeekSchedule, User } from '@api/model'
import createFullName from '@features/home/lib/create-full-name'
import getCurrentDaySubjects from './get-current-day-schedule'

const getSchedule = async (user: User | string | null): Promise<IModules> => {
    const isName = typeof user === 'string'
    const response =
        !isName && !user?.subdivisions
            ? await scheduleApi.get()
            : isName
            ? await scheduleApi.getTeachers(user)
            : await scheduleApi.getTeachers(
                  createFullName({ name: user.name, surname: user.surname, patronymic: user.patronymic }),
              )

    const sessionResponse =
        !isName && !user?.subdivisions
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
    const fullSchedule: { [key: string]: any } = {}
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

                fullSchedule[transformedKey] =
                    !isName && !user?.subdivisions ? response.data[key] : { lessons: response.data[key] }
            }
        }

        for (const [key, value] of Object.entries(fullSchedule)) {
            currentWeekSchedule[key as keyof IWeekSchedule].lessons = getCurrentDaySubjects(value.lessons)
        }
    }

    if (sessionResponse.data.status !== 'error') {
        for (const key in sessionResponse.data) {
            if (!isName && !user?.subdivisions) {
                sessionSchedule[key] = sessionResponse.data[key]
            } else {
                if (sessionResponse.data[key].length) {
                    sessionSchedule[key] = { lessons: sessionResponse.data[key] }
                }
            }
        }
    }
    // // eslint-disable-next-line no-console
    // console.log(sessionSchedule)

    // // eslint-disable-next-line no-console
    // console.log(
    //     Object.keys(sessionResponse.data).length,
    //     !!Object.values(sessionSchedule).find((el) => !!el.lessons.length),
    //     sessionResponse.data.status !== 'error',
    // )

    return {
        '0':
            Object.keys(response.data).length && response.data.status !== 'error'
                ? (currentWeekSchedule as IWeekSchedule)
                : null,
        '1':
            Object.keys(response.data).length && response.data.status !== 'error'
                ? (fullSchedule as IWeekSchedule)
                : null,
        '2':
            Object.keys(sessionResponse.data).length &&
            !!Object.values(sessionSchedule).find((el) => !!el.lessons.length) &&
            sessionResponse.data.status !== 'error'
                ? (sessionSchedule as ISessionSchedule)
                : null,
    }
}

export default getSchedule
