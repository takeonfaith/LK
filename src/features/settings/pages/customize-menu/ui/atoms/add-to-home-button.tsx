import React from "react";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import Button from "../../../../../../shared/ui/atoms/button";

interface Props {
  chosen: boolean;
}

const AddToHomeButton = ({ chosen }: Props) => {
  return (
    <Button
      icon={
        chosen ? <HiHome style={{ color: "var(--blue)" }} /> : <HiOutlineHome />
      }
      onClick={() => null}
    />
  );
};

export default AddToHomeButton;
