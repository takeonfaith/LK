import { userModel } from '@entities/user'
import { getJwtToken } from '@entities/user/lib/jwt-token'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { InternalAxiosRequestConfig } from 'axios'
import { refreshAccessToken } from '../user-api'

export const getAuthResponseInterceptor = (apiInstance: any) => async (error: any) => {
    const originalRequest = error?.config ?? {}
    if (
        error.request.status === 403 ||
        error.request.status === 401 ||
        error?.data?.errors?.[0].extensions?.code === 'AUTH_NOT_AUTHENTICATED' ||
        error?.response?.data?.errors?.[0].extensions?.code === 'AUTH_NOT_AUTHENTICATED'
    ) {
        if (!originalRequest._retry) {
            originalRequest._retry = true
            const refreshToken = localStorage.getItem(BrowserStorageKey.JWTRefresh)

            try {
                const { accessToken, refreshToken: newRefreshToken } = await refreshAccessToken(refreshToken ?? '')
                localStorage.setItem(BrowserStorageKey.JWT, accessToken)
                localStorage.setItem(BrowserStorageKey.JWTRefresh, newRefreshToken)

                return apiInstance(originalRequest)
            } catch (error) {
                userModel.events.logout()
            }
        } else {
            userModel.events.logout()
        }
    }
    return Promise.reject(error)
}

export const addAuthHeaderToRequests = (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
        config.headers = {} as any
    }
    config.headers.Authorization = `Bearer ${getJwtToken()}`
    return config
}
