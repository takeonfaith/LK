import { Colors, MEDIA_QUERIES } from '@shared/constants'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import styled from 'styled-components'

export const EventBackgroundStyled = styled.div<{ background: string; noPadding: boolean }>`
    background: ${({ background }) => background};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({ noPadding }) => (noPadding ? '-25px' : 0)};
    top: ${({ noPadding }) => (noPadding ? '-55px' : 0)};
    z-index: -1;
    overflow: hidden;

    ${MEDIA_QUERIES.isMobile} {
        width: calc(100% + 40px);
    }
`

export const Icons = styled.div`
    position: absolute;
    right: 0;
    width: 70%;
    top: 0;
    height: 100%;
    z-index: 1;

    & > div {
        top: 50%;
        left: 50%;
        position: inherit;
    }

    & > div:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04;
        svg {
            width: 170px;
            height: 170px;
        }
    }
    & > div:nth-child(2) {
        opacity: 0.03;
        transform: translate(100px, -90px);
        svg {
            width: 100px;
            height: 100px;
        }
    }

    & > div:nth-child(3) {
        opacity: 0.02;
        transform: translate(-175px, 0px);
        svg {
            width: 70px;
            height: 70px;
        }
    }

    & > div:nth-child(4) {
        opacity: 0.01;
        transform: translate(90px, 10px);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`

export const IconTextStyled = styled(Flex)<{ shortInfo: boolean; onClick?: () => void }>`
    font-size: ${({ shortInfo }) => `${!shortInfo ? 1 : 0.92}rem`};
    cursor: ${({ onClick }) => onClick && 'pointer'};

    &:hover {
        background: ${({ onClick }) => onClick && 'var(--theme-1t)'};
    }

    ${MEDIA_QUERIES.isMobile} {
        font-size: ${({ shortInfo }) => `${!shortInfo ? 0.95 : 0.6}rem`};
    }
`

export const SmallIcon = styled.div<{ shortInfo: boolean }>`
    opacity: 0.7;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${({ shortInfo }) => (!shortInfo ? 18 : 16)}px;
        height: ${({ shortInfo }) => (!shortInfo ? 18 : 16)}px;
    }

    ${MEDIA_QUERIES.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`

export const SubtextStyled = styled(Subtext)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`

export const CurrentTimeLineStyled = styled.div<{ currentTime: number }>`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2px;
    z-index: -2;
    top: ${({ currentTime }) => `${currentTime}px`};

    &::before {
        display: block;
        content: '';
        min-width: 10px;
        height: 10px;
        border-radius: 12px;
        background: ${Colors.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${Colors.red.main};
    }
`

export const CurrentTime = styled.div`
    color: ${Colors.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${MEDIA_QUERIES.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`
