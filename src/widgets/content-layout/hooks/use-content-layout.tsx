import useLkNotifications from '@entities/lk-notifications/hooks/use-lk-notifications'
import useCurrentExactPage from '@shared/lib/hooks/use-current-exact-page'
import useIsShowWhatsNew from '@shared/lib/hooks/use-is-whats-new'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect } from 'react'
import { WhatsNew } from 'widgets'
import useModal from 'widgets/modal'

const useContentLayout = () => {
    const currentPage = useCurrentExactPage()

    const { open } = useModal()
    const isShowWhatsNew = useIsShowWhatsNew()
    // const { seen } = useShowTutorial()

    useLkNotifications()

    useTheme()

    useEffect(() => {
        if (isShowWhatsNew) {
            isShowWhatsNew && open(<WhatsNew />, 'Что нового')
        }
    }, [isShowWhatsNew])

    return { currentPage }
}

export default useContentLayout
