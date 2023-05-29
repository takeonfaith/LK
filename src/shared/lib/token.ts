import { LocalStorageKey } from '@shared/constants/local-storage'

export default function getToken() {
    return JSON.parse(
        localStorage.getItem(LocalStorageKey.Token) ?? sessionStorage.getItem(LocalStorageKey.Token) ?? 'null',
    )?.token
}
