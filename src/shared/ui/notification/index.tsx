import { Colors, IColors } from '@consts'
import styled from 'styled-components'

const Notification = styled.span<{
    color?: keyof IColors
    outline?: string
    visible?: boolean
    top?: string
    left?: string
    right?: string
    pulsing?: boolean
}>`
    color: #fff;
    background: ${({ color }) => Colors[color ?? 'red'].main};
    position: absolute;
    top: ${({ top }) => top ?? '50%'};
    left: ${({ left }) => left ?? 'auto'};
    right: ${({ right }) => right ?? '50%'};
    outline: ${({ outline }) => outline};
    font-size: 0.65em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: 17px;
    min-width: 17px;
    font-weight: bold;
    height: 17px;
    display: ${({ visible }) => !visible && 'none'};
    animation: ${({ pulsing }) => pulsing && '2s pulsing infinite'};

    @keyframes pulsing {
        0% {
            outline: 0px solid ${({ color }) => Colors[color ?? 'red'].main};
        }
        50% {
            outline: 10px solid transparent;
        }
        100% {
            outline: 0px solid transparent;
        }
    }
`

export default Notification
