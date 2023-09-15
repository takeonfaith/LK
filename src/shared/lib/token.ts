import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

export default function getToken() {
    return localStorage.getItem(BrowserStorageKey.Token) ?? sessionStorage.getItem(BrowserStorageKey.Token) ?? ''
}
