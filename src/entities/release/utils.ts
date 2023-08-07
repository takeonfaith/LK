import { userModel } from '@entities/user'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

export const releaseClear = () => {
    const currentVersion = '0.0.1'

    // Check if the browser has an older version stored in local storage
    const storedVersion = localStorage.getItem(BrowserStorageKey.Version)
    if (storedVersion !== currentVersion) {
        // Clear any stale data from previous versions
        localStorage.clear()

        // Store the new version number for next time
        localStorage.setItem(BrowserStorageKey.Version, currentVersion)

        userModel.events.logout()
    }
}
