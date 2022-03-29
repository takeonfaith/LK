import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { Button, Title } from '@ui/atoms'
import useMouseDelta from '@utils/hooks/use-mouse-delta'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import { useRender } from '@utils/hooks/use-render'
import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import ModalWrapper from '../../widgets/modal/ui/atoms/modal-wrapper'
import getTransform from './lib/get-transform'

const ConfirmWrapper = styled.div<{ isOpen: boolean; isMouseDown: boolean }>`
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
    transition: ${({ isMouseDown }) => (isMouseDown ? '0s' : '0.2s')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    user-select: none;

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

        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 5px;
            background: var(--almostTransparentOpposite);
            width: 30px;
            height: 4px;
            border-radius: 10px;
        }
    }
`

const ConfirmMessage = () => {
    const { isOpen, message, onConfirm, onReject } = confirmModel.selectors.useConfirm()
    const confirmRef = useRef<HTMLDivElement>(null)
    const { deltaY, isMouseDown } = useMouseDelta()

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
            <ConfirmWrapper
                isOpen={isOpen}
                ref={confirmRef}
                isMouseDown={isMouseDown}
                style={{ transform: getTransform(isOpen, deltaY) }}
                onTouchEnd={() => {
                    if (deltaY > 60) {
                        confirmModel.events.closeConfirm()
                    }
                }}
                onMouseUp={() => {
                    if (deltaY > 30) {
                        confirmModel.events.closeConfirm()
                    }
                }}
            >
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

export default memo(ConfirmMessage)
