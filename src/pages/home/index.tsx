import React, { useState } from "react";
import Slider from "../../features/slider/molecules/slider";
import SwitchToggle from "../../shared/ui/moleculas/switch-toggle";

const HomePage = () => {
  const [isToggled, setIsToggled] = useState([false]);
  return (
    <div>
      home
      <SwitchToggle
        id={0}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        key={0}
      />
      <Slider pages={["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"]} />
    </div>
  );
};

export default HomePage;
