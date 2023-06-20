import { Colors } from '@shared/consts'
import styled from 'styled-components'

const Badge = styled.div<{ visible?: boolean }>`
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    padding: 8px;
    border-radius: 6px;
    background: ${Colors.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`

export default Badge
