import { Colors } from '@consts'
import { MessageType } from '@ui/types'
import styled from 'styled-components'
import { getColor } from './lib/get-color'

export const MessageWrapper = styled.div<{ type: MessageType }>`
    font-size: 0.8em;
    padding: 10px;
    color: ${({ type }) => Colors[getColor(type)].main};
    background: ${({ type }) => Colors[getColor(type)].lightTransparent};
    border-radius: var(--brLight);
    position: relative;
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
`
