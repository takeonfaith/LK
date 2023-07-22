import { Button, Title } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { FiChevronLeft, FiX } from 'react-icons/fi'
import useCoreModal from '../lib/hooks/use-core-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'
import useShortCutKeys from '@shared/lib/hooks/use-short-cut-keys'

const Content = styled.div`
    padding-top: 30px;
`

const Modal = () => {
    const { isOpen, component: Component, canBack, back, close, title } = useCoreModal()
    const ref = useRef(null)
    const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component])
    useShortCutKeys(['Escape'], close)

    useOnClickOutside(ref, () => {
        close()
    })

    return (
        <ModalWrapper isOpen={isValid}>
            <ModalContent isOpen={isValid} ref={ref} hasBack={canBack} hasTitle={!!title}>
                {canBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        text={!!title ? '' : 'Назад'}
                        background="transparent"
                        textColor={'var(--theme-opposite)'}
                        width="fit-content"
                        align="left"
                        padding="8px"
                        height="fit-content"
                        className="back-button"
                    />
                )}
                {title && (
                    <Title size={3} align="left">
                        {title}
                    </Title>
                )}
                <Button
                    onClick={close}
                    icon={<FiX />}
                    className="close-button"
                    height="35px"
                    minWidth="35px"
                    width="35px"
                    background="var(--search)"
                />

                <Content>{Component}</Content>
            </ModalContent>
        </ModalWrapper>
    )
}

export default React.memo(Modal)
