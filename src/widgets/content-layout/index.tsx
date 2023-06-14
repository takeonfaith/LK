import PrivateRouter from '@app/routers/private-router'
import React, { Suspense } from 'react'
import { Confirm, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import { Modal } from 'widgets/modal'
import InitialLoader from '../../shared/ui/initial-loader'
import Story from '../../shared/ui/story'
import useContentLayout from './hooks/use-content-layout'
import { ContentWrapper, PageContent, Wrapper } from './styled'
import { userModel } from '@entities/user'
import PopUpNotifications from 'widgets/pop-up-notifications'

const ContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    useContentLayout()

    return (
        <Wrapper>
            <InitialLoader loading={!user} />
            <Story />
            <LeftsideBar />
            <ContentWrapper>
                {/* <Header currentPagePair={{ currentPage, exactCurrentPage }} /> */}
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
            <PopUpNotifications />
        </Wrapper>
    )
}

export default ContentLayout
