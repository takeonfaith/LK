import { Colors } from '@shared/constants'
import styled from 'styled-components'
import { OPEN_CLOSE_ANIMATION_DURATION } from './consts'

export const PopUpNotificationsStyled = styled.div`
    position: absolute;
    width: 320px;
    max-width: 500px;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    padding-top: 0;

    @media (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        left: 50%;
        transform: translateX(-50%);
        top: 10px;
        bottom: auto;
    }
`

export const PopUpNotificationsItem = styled.div<{ open: boolean }>`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({ open }) => (open ? 'open' : 'close')} ${OPEN_CLOSE_ANIMATION_DURATION / 1000}s forwards;

    @keyframes open {
        0% {
            padding: 0px;
            height: 0px;
            margin-top: 0px;
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            padding: 8px;
            height: 65px;
            margin-top: 8px;
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes close {
        0% {
            height: 65px;
            padding: 8px;
            opacity: 1;
            margin-top: 8px;
            transform: scale(1);
        }
        100% {
            height: 0px;
            opacity: 0;
            padding: 0px;
            margin-top: 0px;
            transform: scale(0.9);
        }
    }
`

export const DurationLine = styled.div<{ duration: number; started: boolean }>`
    height: 4px;
    border-radius: 3px;
    background: ${Colors.blue.main};
    animation: ${({ started, duration }) => started && `decrease ${duration / 1000}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`
