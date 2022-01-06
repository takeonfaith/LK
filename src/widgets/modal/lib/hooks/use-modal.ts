import { useCallback, useContext, useEffect, useState } from 'react'
import { Context, ModalContext } from '../context'

export interface IModal {
    isOpen: boolean
    toggle: (event?: any) => void
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
}

const useModal = (component: React.ReactElement<any, any>): IModal => {
    const [Component, setComponentInner] = useState<React.ReactElement<any, any>>(component)
    const { toggle: coreToggle, setComponent, ...rest } = useContext<ModalContext>(Context)

    useEffect(() => {
        setComponentInner(() => component)
    }, [])

    const toggle = useCallback(
        (event: any) => {
            coreToggle(event)
            setComponent?.(Component)
        },
        [Component],
    )

    return {
        toggle,
        ...rest,
    }
}

export default useModal
