import { Colors } from '@shared/constants'
import { confirmModel } from '@entities/confirm'
import { Button, Title } from '@ui/atoms'
import List from '@ui/list'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ModalWrapper from 'widgets/modal/ui/atoms/modal-wrapper'

const ConfirmWrapper = styled.div<{ isOpen: boolean }>`
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
    padding: 20px;
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

const ConfirmMessage = () => {
    const { isOpen, message, onConfirm, onReject } = confirmModel.selectors.useConfirm()
    const confirmRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(confirmRef, () => confirmModel.events.closeConfirm())

    const handleConfirm = () => {
        onConfirm()
        confirmModel.events.closeConfirm()
    }

    const handleReject = () => {
        confirmModel.events.closeConfirm()
    }

    return (
        <ModalWrapper isOpen={isOpen}>
            <ConfirmWrapper isOpen={isOpen} ref={confirmRef}>
                <Title size={3} align="left">
                    {message ?? 'Хотите продолжить?'}
                </Title>
                <List
                    width="100%"
                    scroll={false}
                    direction="horizontal"
                    gap={5}
                    padding="10px 0 0 0"
                    horizontalAlign="right"
                >
                    <Button
                        text="Да"
                        onClick={handleConfirm}
                        width="90px"
                        textColor={Colors.red.main}
                        background="transparent"
                        hoverBackground={Colors.red.transparent3}
                    />
                    <Button
                        text="Нет"
                        onClick={onReject ?? handleReject}
                        width="90px"
                        textColor={Colors.blue.main}
                        background="transparent"
                        hoverBackground={Colors.blue.transparent3}
                    />
                </List>
            </ConfirmWrapper>
        </ModalWrapper>
    )
}

export default ConfirmMessage
