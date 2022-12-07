import PrivateRouter from '@app/routers/private-router'
import { OLD_LK_URL } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useIsShowNotification from '@utils/hooks/use-is-show-notification'
import useResize from '@utils/hooks/use-resize'
import useTheme from '@utils/hooks/use-theme'
import { Suspense, useEffect } from 'react'
import styled from 'styled-components'
import { Confirm, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage, useModal } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import { Modal } from 'widgets/modal'
import WhatsNew from '../../widgets/whats-new'
import InitialLoader from './initial-loader'
import Story from './story'
import React from 'react'
import useShowTutorial from '@utils/hooks/use-show-tutorial'

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;

    .page-content {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        .page-content {
            height: calc(100% - 60px);
        }
    }
`

const ContentLayout = () => {
    const { height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isShowNotification = useIsShowNotification()
    const { seen } = useShowTutorial()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    useTheme()
    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            message: (
                <>
                    Если вы хотите перейти <br /> в старый личный кабинет,{' '}
                    <a href={`${OLD_LK_URL}/index.php`}>нажмите сюда</a>
                </>
            ),
            type: 'info',
            time: 5000,
        })
        // InstallApp()
    }, [])

    useEffect(() => {
        if (seen) {
            isShowNotification && open(<WhatsNew />)
        }
    }, [isShowNotification])

    // useEffect(() => {
    //     if (!seen) {
    //         storyModel.events.open({ pages: TutorialStory })
    //         setSeen(true)
    //     }
    // }, [])

    return (
        <div style={{ height, display: 'flex', background: 'var(--theme)' }}>
            <InitialLoader loading={!user} />
            {/* <GreetingsScreen /> */}
            <Story />
            <LeftsideBar />
            <ContentWrapper>
                {/* <Header /> */}
                <div className="page-content">
                    <Suspense fallback={null}>
                        <PrivateRouter />
                    </Suspense>
                </div>
                <MobileBottomMenu />
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <Confirm />
            <ContextMenu />
            <HintModal />
        </div>
    )
}

export default ContentLayout
