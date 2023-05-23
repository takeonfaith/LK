import styled from 'styled-components'

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
        .page-content {
            height: calc(100% - 60px);
        }
    }
`

export const PageContent = styled.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        height: calc(100% - 60px);
    }
`
