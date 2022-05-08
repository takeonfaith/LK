import { Colors } from '@consts'
import styled from 'styled-components'

const Notification = styled.span<{ color: string; outline?: string; visible?: boolean; top?: string; right?: string }>`
    color: #fff;
    background: ${({ color }) => Colors[color].main};
    position: absolute;
    top: ${({ top }) => top ?? '50%'};
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
`

export default Notification
