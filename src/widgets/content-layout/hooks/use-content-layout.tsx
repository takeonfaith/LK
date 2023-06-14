import useLkNotifications from '@entities/lk-notifications/hooks/use-lk-notifications'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useIsShowNotification from '@shared/lib/hooks/use-is-show-notification'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect } from 'react'
import { WhatsNew } from 'widgets'
import useModal from 'widgets/modal'

const useContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { open } = useModal()
    const isShowNotification = useIsShowNotification()
    // const { seen } = useShowTutorial()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    useLkNotifications()

    useTheme()

    useEffect(() => {
        if (isShowNotification) {
            isShowNotification && open(<WhatsNew />)
        }
    }, [isShowNotification])
}

export default useContentLayout
