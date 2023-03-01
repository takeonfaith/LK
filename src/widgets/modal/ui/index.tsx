import { Colors } from '@consts'
import { Button } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { FiChevronLeft, FiX } from 'react-icons/fi'
import useCoreModal from '../lib/hooks/use-core-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'

const Content = styled.div`
    padding-top: 30px;
`

const Modal = () => {
    const { isOpen, component: Component, canBack, back, close } = useCoreModal()
    const ref = useRef(null)
    const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component])

    useOnClickOutside(ref, () => {
        close()
    })

    return (
        <ModalWrapper isOpen={isValid}>
            <ModalContent isOpen={isValid} ref={ref}>
                {canBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        text="Назад"
                        background="var(--theme)"
                        textColor={Colors.blue.main}
                        width="fit-content"
                        align="left"
                        padding="5px 10px"
                        height="fit-content"
                    />
                )}
                <Button onClick={close} icon={<FiX />} className="close-button" background="transparent" />

                <Content>{Component}</Content>
            </ModalContent>
        </ModalWrapper>
    )
}

export default React.memo(Modal)
