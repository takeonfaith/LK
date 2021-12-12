import React from 'react'
import styled from 'styled-components'
import SliderPage from '../../widgets/slider/organisms/slider-page'
import Account from './pages/account'
import Appearance from './pages/appearance'
import CustomizeMenu from './pages/customize-menu'
import General from './pages/general'
import Security from './pages/security'

const Wrapper = styled.div`
    height: 100%;
    width: 80vw;
    max-width: 1300px;

    .settings-page {
        height: 90%;
        width: 100%;
        border-radius: 10px;
        overflow-y: auto;
        margin-top: 10px;
    }

    @media (max-width: 800px) {
        width: 100%;
        .settings-page {
            font-size: 0.8em;
        }
    }
`

const SettingsPage = () => {
    return (
        <Wrapper>
            <SliderPage
                pages={[
                    { title: 'Общие', content: <General /> },
                    { title: 'Внешний вид', content: <Appearance /> },
                    { title: 'Меню', content: <CustomizeMenu /> },
                    { title: 'Аккаунт', content: <Account /> },
                    { title: 'Безопасность', content: <Security /> },
                ]}
                className="settings-page"
            />
        </Wrapper>
    )
}

export default SettingsPage
