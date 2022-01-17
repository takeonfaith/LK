import React, { useMemo, useRef } from 'react'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import useCoreModal from '../lib/hooks/use-core-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'
import { Button } from '@ui/atoms'
import { FiChevronLeft } from 'react-icons/fi'
import { Colors } from '@consts'

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
                        background="transparent"
                        textColor={Colors.blue.main}
                    />
                )}
                <>{Component}</>
            </ModalContent>
        </ModalWrapper>
    )
}

export default React.memo(Modal)
