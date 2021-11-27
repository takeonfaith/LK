import { memo, useMemo, useRef } from "react";
import useOnClickOutside from "../../../shared/lib/hooks/use-on-click-outside";
import useCoreModal from "../lib/hooks/use-core-modal";
import ModalContent from "./atoms/modal-content";
import ModalWrapper from "./atoms/modal-wrapper";

const Modal = memo(() => {
	const { isOpen, component: Component, toggle } = useCoreModal();
	const ref = useRef(null);
	const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component]);

	useOnClickOutside(ref, (event: any) => {
		if (isValid) toggle(event);
	});

	return (
		<ModalWrapper isOpen={isValid}>
			<ModalContent isOpen={isValid} ref={ref}>
				{Component}
			</ModalContent>
		</ModalWrapper>
	);
});

export default Modal;
