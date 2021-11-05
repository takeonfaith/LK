import React from "react";
import { FiCircle } from "react-icons/fi";
import Button from "../../../../../../shared/ui/atoms/button";
import { IoIosCheckmarkCircle, IoIosRadioButtonOff } from "react-icons/io";

interface Props {
	chosen: boolean;
	onClick: () => void
}

const AddToMenuButton = ({ chosen, onClick }: Props) => {
	return (
		<Button
			icon={chosen ? <IoIosCheckmarkCircle /> : <IoIosRadioButtonOff />}
			onClick={onClick}
		/>
	);
};

export default AddToMenuButton;
