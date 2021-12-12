import { useCallback, useContext, useEffect, useState } from 'react'
import { Context, ModalContext } from '../context'

export interface IModal {
    isOpen: boolean
    toggle: (event?: any) => void
}

const useModal = (component: React.ReactElement<any, any>): IModal => {
    const [Component, setComponentInner] = useState<React.ReactElement<any, any>>(component)

    const { isOpen, toggle: coreToggle, setComponent } = useContext<ModalContext>(Context)

    useEffect(() => {
        setComponentInner(() => component)
    }, [])

    const toggle = useCallback(
        (event: any) => {
            coreToggle(event)
            setComponent?.(() => Component)
        },
        [Component],
    )

    return {
        isOpen,
        toggle,
    }
}

export default useModal
