import { useContext } from 'react'
import { Context, ModalContext } from '../context'

const useCoreModal = () => {
    const { isOpen, component, canBack, back, close, title } = useContext<ModalContext>(Context)

    return {
        back,
        close,
        isOpen,
        canBack,
        component,
        title,
    }
}

export default useCoreModal
