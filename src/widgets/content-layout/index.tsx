import PrivateRouter from '@app/routers/private-router'
import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useResize from '@shared/lib/hooks/use-resize'
import useCurrentExactPage from '@utils/hooks/use-current-exact-page'
import useIsShowNotification from '@utils/hooks/use-is-show-notification'
import useTheme from '@utils/hooks/use-theme'
import React, { Suspense, useEffect } from 'react'
import { Confirm, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage, useModal } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import Header from 'widgets/header'
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
    const { currentPage, exactCurrentPage } = useCurrentExactPage()

    const { height } = useResize()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    useTheme()
    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            message: <>Ведутся технические работы. Возможны проблемы со входом.</>,
            type: 'failure',
            time: 9999999999999,
        })

        // setTimeout(
        //     () =>
        //         popUpMessageModel.events.evokePopUpMessage({
        //             message: (
        //                 <>
        //                     Если вы хотите перейти <br /> в старый личный кабинет,{' '}
        //                     <a href={`${OLD_LK_URL}/index.php`}>нажмите сюда</a>
        //                 </>
        //             ),
        //             type: 'info',
        //             time: 5000,
        //         }),
        //     15000,
        // )

        // TODO: popUpMessageModel add stack of alerts
        // user?.hasAlerts &&
        //     setTimeout(
        //         () =>
        //             popUpMessageModel.events.evokePopUpMessage({
        //                 message: <Link to={ALERTS_ROUTE}>У вас есть новые оповещения</Link>,
        //                 type: 'tip',
        //                 time: 5000,
        //             }),
        //         5000,
        //     )
    }, [user])

    useEffect(() => {
        if (isShowNotification) {
            isShowNotification && open(<WhatsNew />)
        }
    }, [isShowNotification])

    return (
        <Wrapper style={{ height }}>
            <InitialLoader loading={!user} />
            {/* <GreetingsScreen /> */}
            <Story />
            <LeftsideBar />
            <ContentWrapper>
                <Header currentPagePair={{ currentPage, exactCurrentPage }} />
                <PageContent withHeader={!(exactCurrentPage ?? currentPage)?.withoutHeader}>
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
