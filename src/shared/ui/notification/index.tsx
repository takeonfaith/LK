import { Colors, IColors } from '@shared/constants'
import styled from 'styled-components'

const Notification = styled.span<{
    color?: keyof IColors
    outline?: string
    visible?: boolean
    top?: string
    left?: string
    right?: string
    pulsing?: boolean
    position?: string
    shadow?: boolean
}>`
    color: #fff;
    background: ${({ color }) => Colors[color ?? 'red'].light1};
    position: ${({ position }) => position ?? 'absolute'};
    box-shadow: ${({ color, shadow }) => shadow && `0 0 35px ${Colors[color ?? 'red'].main}`};
    top: ${({ top }) => top ?? '50%'};
    left: ${({ left }) => left ?? 'auto'};
    right: ${({ right }) => right ?? '50%'};
    outline: ${({ outline }) => outline};
    font-size: 0.6em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 0 5px;
    min-width: 16px;
    font-weight: bold;
    height: 16px;
    display: ${({ visible }) => !visible && 'none'};

    &::before {
        content: '';
        background: ${({ color }) => Colors[color ?? 'red'].light1};
        display: block;
        width: 100%;
        height: 16px;
        border-radius: 10px;
        position: absolute;
        inset: 0;
        top: 0px;
        z-index: -1;
        animation: ${({ pulsing }) => (pulsing ? 'pulse-animation 1s infinite linear' : 'none')};
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        90% {
            transform: scale(2);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`

export default Notification
