import PrivateRouter from '@app/routers/private-router'
import { userModel } from '@entities/user'
import React, { Suspense, useRef, useState } from 'react'
import { Confirm, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import { Modal } from 'widgets/modal'
import PopUpNotifications from 'widgets/pop-up-notifications'
import InitialLoader from '../../shared/ui/initial-loader'
import Story from '../../shared/ui/story'
import useContentLayout from './hooks/use-content-layout'
import { ContentWrapper, PageContent, Wrapper } from './styled'
import Header from 'widgets/header'

const ContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { currentPage, exactCurrentPage } = useContentLayout()
    const [headerVisible, setHeaderVisible] = useState<boolean>(false)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleContentScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setHeaderVisible(e.currentTarget.scrollTop > 0)
    }

    return (
        <Wrapper>
            <InitialLoader loading={!user} />
            <Story />
            <LeftsideBar />
            <ContentWrapper>
                <Header headerVisible={headerVisible} currentPagePair={{ currentPage, exactCurrentPage }} />
                <PageContent
                    ref={contentRef}
                    onScroll={handleContentScroll}
                    withHeader={!(exactCurrentPage ?? currentPage)?.withoutHeader}
                >
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
