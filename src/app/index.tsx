import React from 'react'
import { HashRouter } from 'react-router-dom'
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
    alert('test')
    return (
        <ModalProvider>
            <SettingsProvider>
                <HashRouter basename="/">
                    <Background>
                        <Router />
                    </Background>
                </HashRouter>
            </SettingsProvider>
        </ModalProvider>
    )
}

export default App
