type OS = 'Windows' | 'MacOS' | 'UNIX' | 'Linux'

const getUsersOS = (): OS => {
    const os = navigator.userAgent

    if (os.search('Mac') !== -1) {
        return 'MacOS'
    } else if (os.search('X11') !== -1 && !(os.search('Linux') !== -1)) {
        return 'UNIX'
    } else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
        return 'Linux'
    }

    return 'Windows'
}

export default getUsersOS
