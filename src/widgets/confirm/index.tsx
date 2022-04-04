import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { Button, Title } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ModalWrapper from '../../widgets/modal/ui/atoms/modal-wrapper'

const ConfirmWrapper = styled.div<{ isOpen: boolean }>`
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 500px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    padding: 20px;
    transition: 0.2s;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transform: translateY(${({ isOpen }) => (isOpen ? '50%' : '51%')}) translateX(-50%)
        scale(${({ isOpen }) => (isOpen ? '1' : '0.95')});

    & > .buttons {
        margin-top: 10px;
        display: flex;
        align-items: center;
        width: 100%;

        & > * + * {
            margin-left: 10px;
        }
    }

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
                <Title size={3}>{message ?? 'Хотите продолжить?'}</Title>
                <div className="buttons">
                    <Button
                        text="Да"
                        onClick={handleConfirm}
                        width="100%"
                        textColor="var(--red)"
                        hoverBackground={Colors.red.transparent}
                    />
                    <Button
                        text="Нет"
                        onClick={onReject ?? handleReject}
                        width="100%"
                        textColor="var(--blue)"
                        hoverBackground={Colors.blue.transparent}
                    />
                </div>
            </ConfirmWrapper>
        </ModalWrapper>
    )
}

export default ConfirmMessage
