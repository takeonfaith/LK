import { userModel } from '@entities/user'

export const releaseClear = () => {
    const currentVersion = '0.0.1'

    // Check if the browser has an older version stored in local storage
    const storedVersion = localStorage.getItem('version')
    if (storedVersion !== currentVersion) {
        // Clear any stale data from previous versions
        localStorage.clear()

        // Store the new version number for next time
        localStorage.setItem('version', currentVersion)

        userModel.events.logout()
    }
}
