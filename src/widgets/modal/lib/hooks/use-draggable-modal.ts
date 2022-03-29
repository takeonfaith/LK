import useMouseDelta from '@utils/hooks/use-mouse-delta'
import { useRef, useState } from 'react'
import useCoreModal from './use-core-modal'

const useDraggableModal = () => {
    const { isOpen, setIsOpen } = useCoreModal()
    const { deltaY, isMouseDown, touchedElement } = useMouseDelta()
    const [showAnimation, setShowAnimation] = useState(false)
    const childrenRef = useRef<HTMLDivElement | null>(null)
    const scrollHeight = childrenRef.current?.scrollHeight
    const scrollTop = (childrenRef.current?.scrollTop ?? 0) + (childrenRef.current?.offsetHeight ?? 0)
    const scrollOnTop = (touchedElement !== 'children' || scrollTop === childrenRef.current?.offsetHeight) ?? 0
    const scrollOnBottom = touchedElement !== 'children' || scrollHeight === scrollTop

    const eventEndHandle = () => {
        setShowAnimation(true)

        if (isOpen === 1 && deltaY < -150 && scrollOnBottom) {
            setIsOpen(2)
        }

        if (deltaY > 100 && isOpen !== 0 && scrollOnTop) {
            setIsOpen((prev) => prev - 1)
        }

        if (deltaY > 250 && isOpen === 2 && scrollOnBottom) {
            setIsOpen(0)
        }
    }

    return {
        deltaY,
        eventEndHandle,
        isMouseDown,
        showAnimation,
        childrenRef,
        scrollOnTop,
        scrollOnBottom,
        setShowAnimation,
    }
}

export default useDraggableModal
