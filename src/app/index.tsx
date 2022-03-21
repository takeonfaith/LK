import { adminLinksModel } from '@entities/admin-links'
import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { ModalProvider } from 'widgets/modal/lib'
import SettingsProvider from '../shared/lib/contexts/settings-context'
import Router from './routes/router'

const App = () => {
    useEffect(() => {
        adminLinksModel.effects.getAdminLinksFx()
    }, [])

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
