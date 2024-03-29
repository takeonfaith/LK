import React from 'react'
import { SCREEN_IPHONE_SE } from '@consts'
import styled from 'styled-components'
import LoginBlock from './ui/organisms/login-block'

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${SCREEN_IPHONE_SE}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const LoginPage = () => {
    return (
        <LoginWrapper>
            <LoginBlock />
        </LoginWrapper>
    )
}

export default LoginPage
