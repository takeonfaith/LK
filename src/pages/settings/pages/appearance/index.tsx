import React, { memo, useState } from "react";
import useTheme from "../../../../shared/lib/hooks/use-theme";
import ToggleArea, {
  ToggleItem,
} from "../../../../shared/ui/organisms/toggle-area";

const Appearance = memo(() => {
  const { theme, switchTheme } = useTheme();
  const [toggles, setToggles] = useState<ToggleItem[]>([
    {
      title: "Темная тема",
      state: theme !== "light",
      action: (state: boolean) => switchTheme(state),
    },
  ]);

  return (
    <>
      <ToggleArea title={"Тема"} toggles={toggles} setToggles={setToggles} />
    </>
  );
});

export default Appearance;
