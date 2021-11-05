import React from "react";
import { FiCircle } from "react-icons/fi";
import Button from "../../../../../../shared/ui/atoms/button";
import { IoIosCheckmarkCircle, IoIosRadioButtonOff } from "react-icons/io";

interface Props {
  chosen: boolean;
}

const AddToMenuButton = ({ chosen }: Props) => {
  return (
    <Button
      icon={chosen ? <IoIosCheckmarkCircle /> : <IoIosRadioButtonOff />}
      onClick={() => null}
    />
  );
};

export default AddToMenuButton;
