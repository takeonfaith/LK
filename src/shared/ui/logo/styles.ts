import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoWrapper = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 80%;
    }
`
