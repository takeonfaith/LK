import { useContext } from 'react'
import { Context, ModalContext } from '../context'

export interface IModal {
    isOpen: boolean
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined) => void
    close: () => void
}

const useModal = (): IModal => {
    const { open, isOpen, ...rest } = useContext<ModalContext>(Context)

    return {
        open,
        isOpen,
        ...rest,
    }
}

export default useModal
