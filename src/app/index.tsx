import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'
import ErrorBoundary from '@shared/ui/error-boundary'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`

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
