import React from "react";
import SwitchToggleWrapper from "../atoms/switch-toggle-wrapper";

interface ISwitchToggle {
  id: number;
  key: number;
  isToggled: boolean[];
  setIsToggled: (isToggled: boolean[]) => void;
}

const SwitchToggle = ({ id, isToggled, setIsToggled }: ISwitchToggle) => {
  const SetIsToggled = (id: number, value: boolean) => {
    isToggled[id] = value;
    setIsToggled([...isToggled]);
  };

  return (
    <SwitchToggleWrapper>
      <input
        type="checkbox"
        name={id.toString()}
        id={id.toString()}
        className="checkbox"
        checked={isToggled[id]}
        onChange={(e) => SetIsToggled(id, !isToggled[id])}
      />
      <label className="toggleBody" htmlFor={id.toString()}>
        <span className="toggleCircle" />
      </label>
    </SwitchToggleWrapper>
  );
};

export default SwitchToggle;
