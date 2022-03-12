import { superiorRoomApi } from '@api'
import { SuperiorRoom } from '@api/model'
import { createEffect, createStore, createEvent } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { forward } from 'effector/effector.mjs'

const useSuperiorRoom = () => {
    return {
        data: useStore($superiorRoomStore).superiorRoom,
        loading: useStore(getSuperiorRoomFx.pending),
        error: useStore($superiorRoomStore).error,
    }
}

interface SuperiorRoomStore {
    superiorRoom: SuperiorRoom | null
    error: string | null
}

const postSuperiorRoom = createEvent<SuperiorRoom>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postSuperiorRoomFx = createEffect(async (postData: SuperiorRoom): Promise<void> => {
    try {
        //   const response = await superiorRoomApi.post(postData)
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

forward({ from: postSuperiorRoom, to: postSuperiorRoomFx })

const getSuperiorRoomFx = createEffect(async (): Promise<SuperiorRoom> => {
    try {
        const response = await superiorRoomApi.get()

        return response.data
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

const $superiorRoomStore = createStore<SuperiorRoomStore>({
    superiorRoom: null,
    error: null,
})
    .on(getSuperiorRoomFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getSuperiorRoomFx.doneData, (oldData, newData) => ({
        ...oldData,
        superiorRoom: newData,
    }))
    .on(getSuperiorRoomFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))

export const selectors = {
    useSuperiorRoom,
}

export const effects = {
    getSuperiorRoomFx,
}
export const events = {
    postSuperiorRoom,
}
