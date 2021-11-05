import React from "react";
import { privateRoutes } from "../../../../../../app/routes/routes";
import LeftsideBarListWrapper from "../../../../../../features/leftside-bar/ui/atoms/leftside-bar-list-wrapper";
import { getChosenRoutes } from "../../../../../../features/leftside-bar/ui/organisms/leftside-bar-list";
import { useSettings } from "../../../../../../shared/lib/contexts/settings-context";
import { CustomizeLeftsideBarItem } from "../molecules";

const CustomizeLeftsideBarList = () => {
  const { setting, change } = useSettings<number[]>("menu");

  const enabledLeftsideBarItems = getChosenRoutes(setting);

  const switchChosen = (id: number) => {
    if (enabledLeftsideBarItems[id]) {
      const newSettings = setting.filter(
        (settingId: number) => settingId !== id
      );

      change(newSettings);
    } else {
      setting.push(id);
      change([...setting]);
    }
  };
  return (
    <LeftsideBarListWrapper>
      {Object.values(privateRoutes).map((el, index) => {
        return (
          <CustomizeLeftsideBarItem
            {...el}
            key={index}
            chosen={!!enabledLeftsideBarItems[el.id]}
            switchMenuItem={switchChosen}
          />
        );
      })}
    </LeftsideBarListWrapper>
  );
};

export default CustomizeLeftsideBarList;
