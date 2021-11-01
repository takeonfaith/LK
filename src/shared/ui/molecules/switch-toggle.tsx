import React from "react";
import SwitchToggleWrapper from "../atoms/switch-toggle-wrapper";

interface ISwitchToggle {
  id: number;
  key: number;
  isToggled: boolean;
  setIsToggled: () => void;
}

const SwitchToggle = ({ id, isToggled, setIsToggled }: ISwitchToggle) => {
  return (
    <SwitchToggleWrapper>
      <input
        type="checkbox"
        name={id.toString()}
        id={id.toString()}
        className="checkbox"
        checked={isToggled}
        onChange={setIsToggled}
      />
      <label className="toggleBody" htmlFor={id.toString()}>
        <span className="toggleCircle" />
      </label>
    </SwitchToggleWrapper>
  );
};

export default SwitchToggle;
