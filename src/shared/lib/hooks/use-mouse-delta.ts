import { useEffect, useState } from 'react'

const getY = (e: TouchEvent | MouseEvent) => {
    if (e.type.includes('touch')) {
        const event = e as TouchEvent
        const touch = event.touches[0] || event.changedTouches[0]
        return touch.clientY
    } else {
        const event = e as MouseEvent
        return event.y
    }
}

const useMouseDelta = () => {
    const [lastY, setLastY] = useState(0)
    const [deltaY, setDeltaY] = useState(0)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [touchedElement, setTouchedElement] = useState<string | null>(null)

    useEffect(() => {
        const onMouseDown = (e: any) => {
            setIsMouseDown(true)
            setLastY(getY(e))
            setTouchedElement(e.target.className)
            // eslint-disable-next-line no-console
        }

        const onMouseMove = (e: TouchEvent | MouseEvent) => {
            if (isMouseDown) {
                setDeltaY(getY(e) - lastY)
            }
        }

        const onMouseUp = () => {
            setIsMouseDown(false)
            setDeltaY(0)
        }

        window.addEventListener('mousedown', onMouseDown)
        window.addEventListener('touchstart', onMouseDown)
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('touchend', onMouseUp)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('touchmove', onMouseMove)
        return () => {
            window.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('touchstart', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('touchend', onMouseUp)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('touchmove', onMouseMove)
        }
    }, [isMouseDown, lastY])
    return { deltaY, isMouseDown, touchedElement }
}

export default useMouseDelta
