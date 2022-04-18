import PrivateRouter from '@app/routes/private-router'
import { OLD_LK_URL } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import useResize from '@utils/hooks/use-resize'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Confirm, Header, LeftsideBar, PopUpMessage } from 'widgets'
import { Modal } from 'widgets/modal'
import InitialLoader from './initial-loader'
import useIsShowNotification from '@utils/hooks/use-is-show-notification'
import { useModal } from 'widgets'
import WhatsNew from '../../widgets/whats-new'

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
        height: calc(100% - 45px);
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`

const ContentLayout = () => {
    const { height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isShowNotification = useIsShowNotification()

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
    }, [])
    useEffect(() => {
        isShowNotification && open(<WhatsNew />)
    }, [isShowNotification])

    return (
        <div style={{ height, display: 'flex' }}>
            <InitialLoader
                loading={!user}
                image="https://mospolytech.ru/local/templates/main/dist/img/logos/mospolytech-logo-white.png"
            />
            <LeftsideBar />
            <ContentWrapper>
                <Header />
                <div className="page-content">
                    <PrivateRouter />
                </div>
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <Confirm />
        </div>
    )
}

export default ContentLayout
