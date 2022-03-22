import { adminLinksApi } from '@api'
import { AdminLinks } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector/compat'

const useAdminLinks = () => {
    return {
        data: useStore($adminLinksStore).adminLinks,
        loading: useStore(getAdminLinksFx.pending),
        error: useStore($adminLinksStore).error,
    }
}

interface AdminLinksStore {
    adminLinks: AdminLinks | null
    error: string | null
}

const getAdminLinksFx = createEffect(async (): Promise<AdminLinks> => {
    try {
        const response = await adminLinksApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const $adminLinksStore = createStore<AdminLinksStore>({
    adminLinks: null,
    error: null,
})
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

export const selectors = {
    useAdminLinks,
}

export const effects = {
    getAdminLinksFx,
}
