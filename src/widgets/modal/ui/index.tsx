import { Colors } from '@consts'
import { Button } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useMemo, useRef } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import useCoreModal from '../lib/hooks/use-core-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'

const Modal = () => {
    const { isOpen, component: Component, canBack, back, close } = useCoreModal()
    const ref = useRef(null)
    const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component])
    const mobilePosition = useSpring({ y: 0 })
    const bindPosition = useDrag(({ offset }) => {
        mobilePosition.y.set(offset[1])
    })

    // console.log(mobilePosition)

    useOnClickOutside(ref, () => {
        close()
    })

    return (
        <ModalWrapper isOpen={isValid}>
            <ModalContent isOpen={isValid} ref={ref} {...bindPosition()} position={mobilePosition.y}>
                {canBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        text="Назад"
                        background="transparent"
                        textColor={Colors.blue.main}
                        width="100%"
                    />
                )}

                <>{Component}</>
            </ModalContent>
        </ModalWrapper>
    )
}

export default React.memo(Modal)
