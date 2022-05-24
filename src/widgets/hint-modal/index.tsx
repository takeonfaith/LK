import { Colors } from '@consts'
import { Message } from '@ui/message'
import React from 'react'
import styled from 'styled-components'

const HintModalWrapper = styled.div<{ left: number; top: number }>`
    left: ${({ left }) => left + 'px'};
    top: ${({ top }) => top + 'px'};
    /* padding: 10px; */
    background: var(--reallyBlue);
    color: #fff;
    border-radius: var(--brLight);
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0 0 30px ${Colors.blue.transparent};
    /* position:ab ; */

    .message {
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            transform: rotate(45deg);
            background: var(--reallyBlue);
            position: absolute;
            top: 15px;
            left: -5px;
            border-radius: 3px;
            z-index: -1;
        }
    }
`

const HintModal = () => {
    return (
        <HintModalWrapper left={0} top={0}>
            <Message type="hint" title={'Тут можно ничего не сделать'} onClose={() => null} width="100%" icon={null} />
        </HintModalWrapper>
    )
}

export default HintModal
