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
        self.addEventListener('activate', function (event: any) {
            event.waitUntil(
                caches.keys().then(function (cacheNames) {
                    return Promise.all(
                        cacheNames
                            .filter(function (cacheName) {
                                // Return true if you want to remove this cache,
                                // but remember that caches are shared across
                                // the whole origin
                            })
                            .map(function (cacheName) {
                                return caches.delete(cacheName)
                            }),
                    )
                }),
            )
        })
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
