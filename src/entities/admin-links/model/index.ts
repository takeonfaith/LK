import { adminLinksApi } from '@api'
import { AdminLinks } from '@api/model'
import { createEvent } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector/compat'

interface AdminLinksStore {
    adminLinks: AdminLinks | null
    error: string | null
}

const DEFAULT_STORE = {
    adminLinks: null,
    error: null,
}

const useAdminLinks = () => {
    return {
        data: useStore($adminLinksStore).adminLinks,
        loading: useStore(getAdminLinksFx.pending),
        error: useStore($adminLinksStore).error,
    }
}

const getAdminLinksFx = createEffect(async (): Promise<AdminLinks> => {
    try {
        const response = await adminLinksApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const clearStore = createEvent()

const $adminLinksStore = createStore<AdminLinksStore>(DEFAULT_STORE)
    .on(getAdminLinksFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getAdminLinksFx.doneData, (oldData, newData) => ({
        ...oldData,
        adminLinks: newData,
    }))
    .on(getAdminLinksFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useAdminLinks,
}

export const effects = {
    getAdminLinksFx,
}

export const events = {
    clearStore,
}
