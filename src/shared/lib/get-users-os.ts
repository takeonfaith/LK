type OS = 'Windows' | 'MacOS' | 'UNIX' | 'Linux' | 'Android' | 'iOS'

const getUsersOS = (): OS => {
    const os = navigator.userAgent

    if (/iPad|iPhone|iPod/.test(os)) {
        return 'iOS'
    } else if (os.search('Mac') !== -1) {
        return 'MacOS'
    } else if (os.search('X11') !== -1 && !(os.search('Linux') !== -1)) {
        return 'UNIX'
    } else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
        return 'Linux'
    } else if (/android/i.test(os)) {
        return 'Android'
    }

    return 'Windows'
}

export default getUsersOS
