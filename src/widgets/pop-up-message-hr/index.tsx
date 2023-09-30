//import { messageType } from '@consts'
import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { Message } from '@ui/atoms'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import ModalWrapper from 'widgets/modal/ui/atoms/modal-wrapper'

const PopUpMessageHrWrapper = styled.div<{ isOpen: boolean; isClickable: boolean }>`
    display: block;
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    white-space: pre-line;
    padding: 15px;
    transition: 0.2s;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transform: translateY(${({ isOpen }) => (isOpen ? '50%' : '51%')}) translateX(-50%)
        scale(${({ isOpen }) => (isOpen ? '1' : '0.95')});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({ isOpen }) => (isOpen ? '1' : '0.95')});
    }
`

const PopUpMessageHr = () => {
    const { isOpen, message, type, time, onClick } = popUpMessageModelHr.selectors.usePopUpMessage()
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                popUpMessageModelHr.events.openPopUpMessage({ isOpen: !isOpen })
            }, time)
        }
    }, [isOpen])

    const handleOnClick = useCallback(() => {
        if (!!onClick) {
            onClick()
            popUpMessageModelHr.events.openPopUpMessage({ isOpen: !isOpen })
        }
    }, [onClick])

    return (
        <ModalWrapper isOpen={isOpen}>
            <PopUpMessageHrWrapper isOpen={isOpen} isClickable={!!onClick} onClick={handleOnClick}>
                <Message
                    type={type}
                    fontSize="1em"
                    solidBackground
                    onClose={() => popUpMessageModelHr.events.openPopUpMessage({ isOpen: false })}
                >
                    {message}
                </Message>
            </PopUpMessageHrWrapper>
        </ModalWrapper>
    )
}

export default PopUpMessageHr
