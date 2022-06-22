import { Loading } from '@ui/loading'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from 'widgets/modal/lib'
import SettingsProvider from '../shared/lib/contexts/settings-context'
import Router from './routes/router'

const App = () => {
    return (
        <ModalProvider>
            <SettingsProvider>
                <BrowserRouter basename="/">
                    <Suspense fallback={() => null}>
                        <Router />
                    </Suspense>
                </BrowserRouter>
            </SettingsProvider>
        </ModalProvider>
    )
}

export default App
