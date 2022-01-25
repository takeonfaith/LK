import { HOME_ROUTE } from '@app/routes/routes'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoPicture from '../../images/logo.png'

const LogoWrapper = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 80%;
    }
`

const Logo = () => {
    return (
        <LogoWrapper to={HOME_ROUTE}>
            <img src={LogoPicture} alt="Logo" />
        </LogoWrapper>
    )
}

export default Logo
