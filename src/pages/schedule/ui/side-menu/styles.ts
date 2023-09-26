import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const SideMenuStyled = styled.div`
    min-width: 210px;
    padding-right: 10px;
    height: calc(100vh - var(--header-height) - 112px);
    display: flex;
    z-index: 10;
    gap: 8px;
    flex-direction: column;

    ${MEDIA_QUERIES.isMobile} {
        display: none;
    }
`
