import PrivateRouter from '@app/routes/private-router'
import { popUpMessageModel } from '@entities/pop-up-message'
import useResize from '@utils/hooks/use-resize'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ConfirmMessage from 'widgets/confirm'
import PopUpMessage from 'widgets/pop-up-message'
import { Header, LeftsideBar } from 'widgets'
import { Modal } from 'widgets/modal'

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
    useTheme()
    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            message:
                'Это новый вариант личного кабинета. Если вы хотите перейти на старый, зайдите в настройки -> общие',
            type: 'info',
            time: 7000,
        })
    }, [])

    return (
        <div style={{ height, display: 'flex' }}>
            <LeftsideBar />
            <ContentWrapper>
                <Header />
                <div className="page-content">
                    <PrivateRouter />
                </div>
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <ConfirmMessage />
        </div>
    )
}

export default ContentLayout
