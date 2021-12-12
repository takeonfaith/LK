import React from 'react'
import styled from 'styled-components'

import Header from './template/header'
import LeftsideBar from './template/leftside-bar'
import PrivateRouter from '@app/routes/private-router'
import { Modal } from '@features/modal'
import PopUpMessage from '@features/pop-up-message/ui'

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;

    .page-content {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        height: calc(100vh - 45px);
    }
`

const ContentLayout = () => {
    return (
        <div style={{ height: '100vh', display: 'flex' }}>
            <LeftsideBar />
            <ContentWrapper>
                <Header />
                <div className="page-content">
                    <PrivateRouter />
                </div>
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
        </div>
    )
}

export default ContentLayout
