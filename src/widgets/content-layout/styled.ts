import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`

export const PageContent = styled.div<{ withHeader: boolean }>`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    ${({ withHeader }) =>
        withHeader
            ? css`
                  height: calc(100% - var(--header-height));
              `
            : css`
                  height: 100%;
              `}
    }

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: ${({ withHeader }) =>
            withHeader
                ? 'calc(100% - var(--mobile-bottom-menu-height) - var(--header-height))'
                : 'calc(100% - var(--mobile-bottom-menu-height))'};
    }
`
