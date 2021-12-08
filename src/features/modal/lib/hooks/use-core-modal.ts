import { useContext } from 'react'
import { Context, ModalContext } from '../context'

const useCoreModal = () => {
    const { isOpen, component, toggle } = useContext<ModalContext>(Context)

    return {
        isOpen,
        toggle,
        component,
    }
}

export default useCoreModal
