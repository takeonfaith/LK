import { useContext } from 'react'
import { Context, ModalContext } from '../context'

const useCoreModal = () => {
    const { isOpen, component, canBack, back, close } = useContext<ModalContext>(Context)

    return {
        back,
        close,
        isOpen,
        canBack,
        component,
    }
}

export default useCoreModal
