import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const SideMenuStyled = styled.div<{ isSideMenuOpen: boolean }>`
    min-width: ${({ isSideMenuOpen }) => (isSideMenuOpen ? '210px' : '60px')};
    width: ${({ isSideMenuOpen }) => (isSideMenuOpen ? '210px' : '60px')};
    padding-right: 10px;
    height: calc(100vh - var(--header-height) - 112px);
    display: flex;
    z-index: 10;
    gap: 8px;
    flex-direction: column;
    align-items: ${({ isSideMenuOpen }) => (isSideMenuOpen ? 'flex-start' : 'center')};

    ${MEDIA_QUERIES.isMobile} {
        display: none;
    }
`
