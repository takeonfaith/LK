import { LocalStorageKey } from '@shared/constants/local-storage'

export const getJwtToken = () => {
    return localStorage.getItem(LocalStorageKey.JWT)
}

export const setJwtToken = (token: string) => {
    return localStorage.setItem(LocalStorageKey.JWT, token)
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
