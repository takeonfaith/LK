import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

const getSearchHistory = () => JSON.parse(localStorage.getItem(BrowserStorageKey.SearchHistory) ?? '[]') as string[]

export default getSearchHistory
