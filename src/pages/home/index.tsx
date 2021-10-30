import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../app/routes/routes";
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
    </div>
  );
};

export default HomePage;
