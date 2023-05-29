import { Colors } from '@shared/constants/consts'
import { hintModel } from '@entities/hint'
import { Message } from '@ui/message'
import React from 'react'
import styled from 'styled-components'

const HintModalWrapper = styled.div<{ open: boolean; left: number; top: number }>`
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
    box-shadow: 0 0 30px ${Colors.blue.transparent3};
    transition: 0.2s;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(20px)')};
    position: absolute;
    z-index: 5;
    min-width: 150px;

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
    const { hints } = hintModel.selectors.useHint()
    const currentHint = hints[0]

    if (!currentHint) return null

    return (
        <HintModalWrapper open={currentHint.isOpen} left={currentHint.position.x} top={currentHint.position.y}>
            <Message
                type="hint"
                title={currentHint.message}
                onClose={() => hintModel.events.close()}
                width="100%"
                icon={null}
            />
        </HintModalWrapper>
    )
}

export default HintModal
