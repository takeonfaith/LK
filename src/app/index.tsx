import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`

const App = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            caches.keys().then(function (cacheNames) {
                cacheNames.forEach(function (cacheName) {
                    caches.delete(cacheName)
                })
            })
        }
    }, [])
    return (
        <ModalProvider>
            <HashRouter basename="/">
                <Background>
                    <Router />
                </Background>
            </HashRouter>
        </ModalProvider>
    )
}

export default App
