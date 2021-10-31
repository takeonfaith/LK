import React, { createContext, memo, useCallback, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

import useOnClickOutside from '../../shared/lib/hooks/useOnClickOutside';

// Я тупить по тс-у
const Context = createContext<ModalContext>({
	isOpen: false,
	component: undefined,
	toggle: () => { },
});

interface ModalContext {
	isOpen: boolean
	component: React.ReactElement<any, any> | undefined
	toggle: () => void
	setComponent?: React.Dispatch<React.SetStateAction<React.ReactElement<any, any> | undefined>>
}
export interface IModal {
	isOpen: boolean,
	toggle: () => void
}

export const useModal = (component: React.ReactElement<any, any>): IModal => {
	const [Component, setComponentInner] = useState<React.ReactElement<any, any>>(component);

	const { isOpen, toggle: coreTogge, setComponent } = useContext<ModalContext>(Context)

	useEffect(() => {
		setComponentInner(_ => component)
	}, [setComponentInner, component]);

	const toggle = useCallback(() => {
		coreTogge()
		setComponent?.(_ => Component)
	}, [coreTogge, setComponent, Component])

	return {
		isOpen,
		toggle
	}
}

export const useCoreModal = () => {
	const { isOpen, component, toggle } = useContext<ModalContext>(Context)

	return {
		isOpen,
		toggle,
		component
	}
}

interface Props {
	children: JSX.Element
}

export const ModalProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [component, setComponent] = useState<React.ReactElement<any, any>>();


	const toggle = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [setIsOpen])

	return (
		<Context.Provider value={{
			isOpen,
			toggle,
			component,
			setComponent
		}}>
			{children}
		</Context.Provider>
	)
}

const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
`

const ModalContent = styled.div`
`

const Modal = memo(() => {
	const { isOpen, component: Component, toggle } = useCoreModal()
	const ref = useRef(null)

	useOnClickOutside(ref, toggle)

	return (isOpen && Component)
		? <ModalWrapper>
			<ModalContent ref={ref}>
				{Component}
			</ModalContent>
		</ModalWrapper>
		: <div></div>
})

export default Modal