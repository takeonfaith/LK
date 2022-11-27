import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { appInit } from 'shared/effector/app-init'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import SettingsProvider from '../shared/lib/contexts/settings-context'
import Router from './routers/router'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`

const App = () => {
    useEffect(() => {
        appInit()
    })

    return (
        <ModalProvider>
            <SettingsProvider>
                <BrowserRouter basename="/">
                    <Background>
                        <Router />
                    </Background>
                </BrowserRouter>
            </SettingsProvider>
        </ModalProvider>
    )
}

export default App
