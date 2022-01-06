import React, { useState, useCallback, createContext, useMemo } from 'react'

export const Context = createContext<ModalContext>({
    isOpen: false,
    component: undefined,
    toggle: () => {},
    back: () => {},
    close: () => {},
    open: () => {},
})

export interface ModalContext {
    isOpen: boolean
    component: React.ReactElement<any, any> | undefined
    toggle: (event?: any) => void
    setComponent?: (Component: React.ReactElement<any, any> | undefined) => void
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
}

interface Props {
    children: JSX.Element
}

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [openModals, setOpenModals] = useState<React.ReactElement<any, any>[]>([])

    const canBack = openModals.length > 0

    const toggle = useCallback(() => {
        if (isOpen) {
            setOpenModals([])
        }
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const back = useCallback(() => {
        if (canBack) {
            openModals.pop()
            setOpenModals([...openModals])
        }
    }, [openModals, setOpenModals])

    const open = useCallback(
        (Component: React.ReactElement<any, any> | undefined) => {
            if (Component) {
                setOpenModals([...openModals, Component])
                setIsOpen(() => true)
            }
        },
        [setOpenModals, setIsOpen],
    )

    const close = useCallback(() => {
        setOpenModals([])
        setIsOpen(() => false)
    }, [setOpenModals, setIsOpen])

    const component = useMemo(() => openModals[openModals.length - 1], [openModals])

    const setComponent = useCallback((Component: React.ReactElement<any, any> | undefined) => {
        if (Component) {
            setOpenModals([...openModals, Component])
        }
    }, [])

    return (
        <Context.Provider
            value={{
                back,
                open,
                close,
                isOpen,
                toggle,
                component,
                setComponent,
            }}
        >
            {children}
        </Context.Provider>
    )
}
