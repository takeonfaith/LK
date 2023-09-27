import { userApiRequest } from '@shared/api/config/user-api-config'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'

const onSearch = createEvent<string>()
const resetTeachers = createEvent()

const searchFx = createEffect(async (search: string) => {
    const {
        employees: { items },
    } = await userApiRequest<{ employees: { items: { guid: string; fullName: string }[] } }>(`
    query teachers {
        employees(
          take: 30
          order: { fullName: ASC }
          where: { fullName: { contains: "${search}" } }
        ) {
          items {
            fullName
            guid
          }
        }
      }`)

    return items
})

const $search = createStore<string | null>(null).on(onSearch, (_, search) => search)

debounce({
    source: sample({ source: $search, filter: (value): value is string => value !== null }),
    timeout: 200,
    target: searchFx,
})

sample({ source: $search, filter: (value): value is string => value !== null })

const $teachers = createStore<{ guid: string; fullName: string }[]>([]).on(searchFx.doneData, (_, data) => data)

sample({ clock: resetTeachers, target: $search.reinit! })

export { $teachers, onSearch, $search, resetTeachers }
