import React, { useState, useCallback, createContext, useMemo, useEffect } from 'react'

export const Context = createContext<ModalContext>({
    isOpen: false,
    component: undefined,
    //  toggle: () => {},
    back: () => {},
    close: () => {},
    open: () => {},
    canBack: false,
})

export interface ModalContext {
    isOpen: boolean
    component: React.ReactElement<any, any> | undefined
    setComponent?: (Component: React.ReactElement<any, any> | undefined) => void
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
    canBack: boolean
}

interface Props {
    children: JSX.Element
}

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [openModals, setOpenModals] = useState<React.ReactElement<any, any>[]>([])

    const canBack = openModals.length > 1

    const back = useCallback(() => {
        if (canBack) {
            openModals.pop()
            setOpenModals([...openModals])
        }
    }, [openModals, setOpenModals])

    const open = useCallback(
        (Component: React.ReactElement<any, any> | undefined) => {
            if (Component) {
                if (!isOpen) {
                    setOpenModals(() => [Component])
                } else {
                    setOpenModals(() => [...openModals, Component])
                }
                setIsOpen(() => true)
            }
        },
        [setOpenModals, setIsOpen, openModals, isOpen],
    )

    const close = useCallback(() => {
        setIsOpen(() => false)
    }, [setOpenModals, setIsOpen])

    const component = useMemo(() => openModals[openModals.length - 1], [openModals])

    const setComponent = useCallback((Component: React.ReactElement<any, any> | undefined) => {
        if (Component) {
            setOpenModals([...openModals, Component])
        }
    }, [])

    console.log({
        openModals,
        canBack,
    })
    return (
        <Context.Provider
            value={{
                back,
                open,
                close,
                isOpen,
                canBack,
                component,
                setComponent,
            }}
        >
            {children}
        </Context.Provider>
    )
}
