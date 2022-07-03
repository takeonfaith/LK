import React from 'react'
import { BrowserRouter } from 'react-router-dom'
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
