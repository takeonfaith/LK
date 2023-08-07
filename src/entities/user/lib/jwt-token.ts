import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

export const getJwtToken = () => {
    return localStorage.getItem(BrowserStorageKey.JWT)
}

export const setJwtToken = (token: string) => {
    return localStorage.setItem(BrowserStorageKey.JWT, token)
}

export const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join(''),
    )

    return JSON.parse(jsonPayload)
}
