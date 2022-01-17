import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ModalProvider } from 'widgets/modal/lib'
import SettingsProvider from '../shared/lib/contexts/settings-context'
import Router from './routes/router'
import Promise from 'promise-polyfill'

window.Promise = Promise

const App = () => {
    return (
        <ModalProvider>
            <SettingsProvider>
                <HashRouter basename="/">
                    <Router />
                </HashRouter>
            </SettingsProvider>
        </ModalProvider>
    )
}

export default App
