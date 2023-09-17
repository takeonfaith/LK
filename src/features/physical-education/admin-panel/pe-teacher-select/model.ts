import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'

const onSearch = createEvent<string>()
const resetTeachers = createEvent()

const searchFx = createEffect(async (search: string) => {
    const {
        teachers: { items },
    } = await pERequest<{ teachers: { items: { teacherGuid: string; fullName: string }[] } }>(`
    query teachers {
      teachers(
          take: 100
          order: { fullName: ASC }
          where: { fullName: { contains: "${search}" } }
        ) {
          items {
            fullName
            teacherGuid
          }
        }
      }`)

    return items
})

const $search = createStore<string>('').on(onSearch, (_, search) => search)
debounce({
    source: sample({ source: $search, filter: (value): value is string => value !== null }),
    timeout: 200,
    target: searchFx,
})

const $teachers = createStore<{ teacherGuid: string; fullName: string }[]>([]).on(searchFx.doneData, (_, data) => data)

sample({ clock: resetTeachers, target: $search.reinit! })

export { $teachers, onSearch, $search, resetTeachers }
