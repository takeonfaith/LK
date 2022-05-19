import { Colors, IColors, messageType } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button } from '@ui/atoms'
import React, { useCallback, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

const PopUpMessageWrapper = styled.div<{ isOpen: boolean; color: keyof IColors; isClickable: boolean }>`
    width: 300px;
    border-radius: var(--brLight);
    background: ${({ color }) => Colors[color].dark};
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(${({ isOpen }) => (isOpen ? '0px' : '-20px')});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    padding: 10px;
    padding-right: 30px;
    text-align: left;
    color: ${({ color }) => Colors[color].main};
    font-weight: 600;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'normal')};

    a {
        color: #fff;
    }

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
            <Button onClick={() => popUpMessageModel.events.openPopUpMessage({ isOpen: false })} icon={<FiX />} />
            {message}
        </PopUpMessageWrapper>
    )
}

export default PopUpMessage
