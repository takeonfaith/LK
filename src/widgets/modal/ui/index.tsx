import { Colors } from '@consts'
import { Button } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import useResize from '@utils/hooks/use-resize'
import React, { useMemo, useRef } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import getHeight from '../lib/get-height'
import getTransform from '../lib/get-transform'
import useCoreModal from '../lib/hooks/use-core-modal'
import useDraggableModal from '../lib/hooks/use-draggable-modal'
import ModalContent from './atoms/modal-content'
import ModalWrapper from './atoms/modal-wrapper'

const Modal = () => {
    const { isOpen, component: Component, canBack, back, close } = useCoreModal()
    const ref = useRef(null)
    const { width } = useResize()
    const isValid = useMemo(() => isOpen !== 0 && !!Component, [isOpen, Component])
    const {
        deltaY,
        eventEndHandle,
        isMouseDown,
        showAnimation,
        childrenRef,
        scrollOnBottom,
        scrollOnTop,
        setShowAnimation,
    } = useDraggableModal()

    useOnClickOutside(ref, () => {
        close()
    })

    return (
        <ModalWrapper isOpen={isValid}>
            <ModalContent
                isOpen={isOpen}
                ref={ref}
                isMouseDown={isMouseDown && !showAnimation}
                style={
                    width <= 800
                        ? {
                              transform: `translateY(${getTransform(isOpen, deltaY, scrollOnTop)})`,
                              height: getHeight(isOpen, deltaY, scrollOnTop, scrollOnBottom),
                          }
                        : {}
                }
                onTouchStart={() => {
                    setShowAnimation(false)
                }}
                onTouchEnd={eventEndHandle}
            >
                {canBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        text="Назад"
                        background="transparent"
                        textColor={Colors.blue.main}
                        width="100%"
                        align="left"
                    />
                )}
                {/* {header && <div className="header">{header}</div>} */}
                <div className="children" ref={childrenRef}>
                    {Component}
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}

export default React.memo(Modal)
