import { useContext } from 'react'
import { Context, ModalContext } from '../context'

const useCoreModal = () => {
    const { isOpen, component, canBack, back, close, open, setIsOpen } = useContext<ModalContext>(Context)

    return {
        open,
        back,
        close,
        setIsOpen,
        isOpen,
        canBack,
        component,
    }
}

export default useCoreModal
