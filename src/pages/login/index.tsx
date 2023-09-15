import React from 'react'
import styled from 'styled-components'
import LoginBlock from './ui/organisms/login-block'
import { MEDIA_QUERIES } from '@shared/constants'

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${MEDIA_QUERIES.isMobile} {
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
