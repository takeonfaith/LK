import { releaseClear } from '@entities/release/utils'
import useTheme from '@shared/lib/hooks/use-theme'
import { HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'
import ErrorBoundary from '@shared/ui/error-boundary'
import React from 'react'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`

releaseClear()

const App = () => {
    useTheme()

    return (
        <ModalProvider>
            <HashRouter basename="/">
                <Background>
                    <ErrorBoundary>
                        <Router />
                    </ErrorBoundary>
                </Background>
            </HashRouter>
        </ModalProvider>
    )
}

export default App
