import React, {
	useState,
	useCallback,
	createContext,
} from "react";

export const Context = createContext<ModalContext>({
	isOpen: false,
	component: undefined,
	toggle: (event?: any) => { },
});

export interface ModalContext {
	isOpen: boolean;
	component: React.ReactElement<any, any> | undefined;
	toggle: (event?: any) => void;
	setComponent?: React.Dispatch<
		React.SetStateAction<React.ReactElement<any, any> | undefined>
	>;
}


interface Props {
	children: JSX.Element;
}

export const ModalProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [component, setComponent] = useState<React.ReactElement<any, any>>();

	const toggle = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, [setIsOpen]);

	return (
		<Context.Provider
			value={{
				isOpen,
				toggle,
				component,
				setComponent,
			}}
		>
			{children}
		</Context.Provider>
	);
};