import Block from '@ui/block'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ModalWrapper from 'widgets/modal/ui/atoms/modal-wrapper'
import { contextMenuModel } from '../../entities/context-menu'

const ContextMenuWrapper = styled.div<{
    isVisible: boolean
    left: number
    top: number
}>`
    height: fit-content;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
    position: absolute;
    width: 190px;
    left: ${({ left }) => left + 'px'};
    top: ${({ top }) => top + 'px'};
    background: var(--schedule);
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    z-index: 4;
    padding: 8px;
    color: var(--text);

    @media (max-width: 500px) {
        width: calc(100vw - 20px);
        left: 50%;
        transform: ${({ isVisible }) =>
            isVisible ? 'translateY(0) translateX(-50%)' : 'translateY(20px) translateX(-50%)'};
        bottom: 10px;
        top: auto;
    }
`

const ContextMenu = () => {
    const { open, content, position } = contextMenuModel.selectors.useContextMenu()
    const contextRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(contextRef, () => contextMenuModel.events.close())

    return (
        <ModalWrapper isOpen={open}>
            <ContextMenuWrapper
                isVisible={open}
                ref={contextRef}
                left={position.x}
                top={position.y}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                {content}
            </ContextMenuWrapper>
        </ModalWrapper>
    )
}

export default ContextMenu
