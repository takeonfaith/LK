import PrivateRouter from '@app/routers/private-router'
import { ALERTS_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useIsShowNotification from '@utils/hooks/use-is-show-notification'
import useTheme from '@utils/hooks/use-theme'
import React, { Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Confirm, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage, useModal } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import { Modal } from 'widgets/modal'
import InitialLoader from '../../shared/ui/initial-loader'
import Story from '../../shared/ui/story'
import WhatsNew from '../whats-new'
import { ContentWrapper, PageContent, Wrapper } from './styled'

const ContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isShowNotification = useIsShowNotification()
    // const { seen } = useShowTutorial()

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

        // TODO: popUpMessageModel add stack of alerts
        user?.hasAlerts &&
            setTimeout(
                () =>
                    popUpMessageModel.events.evokePopUpMessage({
                        message: <Link to={ALERTS_ROUTE}>У вас есть новые оповещения</Link>,
                        type: 'tip',
                        time: 5000,
                    }),
                5000,
            )
        // InstallApp()
    }, [user])

    useEffect(() => {
        if (isShowNotification) {
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
        <Wrapper>
            <InitialLoader loading={!user} />
            {/* <GreetingsScreen /> */}
            <Story />
            <LeftsideBar />
            <ContentWrapper>
                {/* <Header /> */}
                <PageContent>
                    <Suspense fallback={null}>
                        <PrivateRouter />
                    </Suspense>
                </PageContent>
                <MobileBottomMenu />
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <Confirm />
            <ContextMenu />
            <HintModal />
        </Wrapper>
    )
}

export default ContentLayout
