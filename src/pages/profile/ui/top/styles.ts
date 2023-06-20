import BlockWrapper from '@shared/ui/block/styles'
import styled from 'styled-components'

export const TopStyled = styled.header`
    width: 100%;
    /* max-width: 750px; */
    padding-top: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);

    svg {
        min-width: 30px;
    }

    @media (max-width: 1000px) {
        padding: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .info {
            display: none;
        }
    }
`

export const Shape = styled.div<{ left: number; top: number; borderRadius: number; width: number; height: number }>`
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    border-radius: ${({ borderRadius }) => borderRadius + 'px'};
    position: absolute;
    top: ${({ top }) => top + '%'};
    left: ${({ left }) => left + '%'};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({ color }) => color};
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
        width: calc(50% - 5px);
    }

    button {
        font-size: 0.7rem;

        span {
            margin-top: 8px;
            margin-bottom: -8px;
        }
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;

        button {
            height: 42px;
        }
    }
`

export const IconWrapper = styled.div<{ background: string; width?: string }>`
    min-width: ${({ width }) => width ?? '35px'};
    height: ${({ width }) => width ?? '35px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({ background }) => background ?? 'var(--almostTransparent)'};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({ background }) => background ?? 'var(--almostTransparent)'}; */
    }
`

export const Info = styled.div`
    margin-bottom: 15px;
    height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    b {
        font-size: 1.2rem;
    }

    span {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        & > .info {
            display: none;
        }
    }
`

export const InfoWrapper = styled.div`
    margin-top: 50px;
    width: 100%;
`

export const BlocksList = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const TopInfoBlock = styled(BlockWrapper)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`

export const AvatarWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`
