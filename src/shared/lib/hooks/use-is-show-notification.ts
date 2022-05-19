import { useEffect, useState } from 'react'
import { userModel } from '@entities/user'
import { LastUpdateWhatsNew } from '@consts'

const useIsShowNotification = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [isShowNotification, setIsShowNotification] = useState<boolean>(false)

    const checkingShowNotification = (lastAccess: string) => {
        const lastLocalAccess = localStorage.getItem('lastLocalAccess') || lastAccess
        const UpdateWhatsNewDate = new Date(LastUpdateWhatsNew)

        if (new Date(lastAccess) < UpdateWhatsNewDate && new Date(lastLocalAccess) < UpdateWhatsNewDate) {
            localStorage.setItem('lastLocalAccess', new Date().toISOString())
            setIsShowNotification(true)
        }
    }

    useEffect(() => {
        if (!!user) {
            checkingShowNotification(user.lastaccess)
        }
    }, [user])

    return isShowNotification
}

export default useIsShowNotification
