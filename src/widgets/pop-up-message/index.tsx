import { messageType } from '@shared/constants/consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Message } from '@ui/atoms'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const PopUpMessageWrapper = styled.div<{ isOpen: boolean; isClickable: boolean }>`
    width: 300px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: var(--theme);
    border-radius: var(--brLight);
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(${({ isOpen }) => (isOpen ? '0px' : '-20px')});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    font-weight: 600;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'normal')};

    /* a {
        color: #fff;
    } */

    button {
        position: absolute;
        top: 4px;
        right: 4px;
        background: transparent;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        padding: 5px;
        color: #fff;

        &:hover {
            background: #ffffff5c;
        }
    }

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({ isOpen }) => (isOpen ? '-50%, 0px' : '-50%, -20px')});
        font-size: 0.8em;
    }
`

const PopUpMessage = () => {
    const { isOpen, message, type, time, onClick } = popUpMessageModel.selectors.usePopUpMessage()

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                popUpMessageModel.events.openPopUpMessage({ isOpen: !isOpen })
            }, time)
        }
    }, [isOpen])

    const handleOnClick = useCallback(() => {
        if (!!onClick) {
            onClick()
            popUpMessageModel.events.openPopUpMessage({ isOpen: !isOpen })
        }
    }, [onClick])

    return (
        <PopUpMessageWrapper
            isOpen={isOpen}
            isClickable={!!onClick}
            color={messageType[type].color}
            onClick={handleOnClick}
        >
            <Message
                type={type}
                fontSize="1em"
                onClose={() => popUpMessageModel.events.openPopUpMessage({ isOpen: false })}
            >
                {message}
            </Message>
        </PopUpMessageWrapper>
    )
}

export default PopUpMessage
