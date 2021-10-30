import React, { useCallback, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { settingsModel } from "../../entities/settings";
import Slider from "../../features/slider/molecules/slider";
import Button from "../../shared/ui/atoms/button";
import Input from "../../shared/ui/atoms/input";
import ToggleArea, { ToggleItem } from "../../shared/ui/organisms/toggle-area";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];

const HomePage = () => {
  const [value, setValue] = useState("");
  const [toggles, setToggles] = useState<ToggleItem[]>(
    settingsModel.selectors.useSettings().ui
  );

  const handleChange = useCallback(
    (id: number) => {
      toggles[id].state = !toggles[id].state;

      setToggles([...toggles]);
    },
    [toggles]
  );

  return (
    <div>
      home
      <ToggleArea title={"User"} toggles={toggles} onChange={handleChange} />
      <Slider pages={pages} />
      <Input value={value} setValue={setValue} />
    </div>
  );
};

export default HomePage;
