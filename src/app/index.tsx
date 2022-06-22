import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from 'widgets/modal/lib'
import SettingsProvider from '../shared/lib/contexts/settings-context'
import Router from './routes/router'

const App = () => {
    return (
        <ModalProvider>
            <SettingsProvider>
                <BrowserRouter basename="/">
                    <Router />
                </BrowserRouter>
            </SettingsProvider>
        </ModalProvider>
    )
}

export default App
