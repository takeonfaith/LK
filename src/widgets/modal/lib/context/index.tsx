import limitNumber from '@utils/limit-number'
import React, { createContext, useCallback, useMemo, useState } from 'react'

export const Context = createContext<ModalContext>({
    isOpen: 0,
    component: undefined,
    back: () => {},
    close: () => {},
    open: () => {},
    setIsOpen: () => {},
    canBack: false,
})

export interface ModalContext {
    isOpen: number
    component: React.ReactElement<any, any> | undefined
    setComponent?: (Component: React.ReactElement<any, any> | undefined) => void
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
    setIsOpen: React.Dispatch<React.SetStateAction<number>>
    canBack: boolean
}

interface Props {
    children: JSX.Element
}

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<number>(0)
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
                setIsOpen(1)
            }
        },
        [setOpenModals, setIsOpen, openModals, isOpen],
    )

    const close = useCallback(() => {
        setIsOpen(0)
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
                canBack,
                component,
                setIsOpen,
                setComponent,
            }}
        >
            {children}
        </Context.Provider>
    )
}
