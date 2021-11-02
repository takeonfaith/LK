import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "./use-local-storage";

const useTheme = () => {
  const { get, set } = useLocalStorage();
  const [theme, setTheme] = useState<string>(
    get("theme") ??
      document.documentElement.getAttribute("data-theme") ??
      "light"
  );

  useEffect(() => {
    const localTheme = get("theme");

    if (!localTheme) {
      if (!document.documentElement.getAttribute("data-theme")) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    } else {
      document.documentElement.setAttribute("data-theme", localTheme);
    }
  }, [get]);

  const switchTheme = useCallback(
    (state) => {
      setTheme((prev) => {
        const newTheme = state ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
        set("theme", newTheme);

        return newTheme;
      });
    },
    [set]
  );

  return { theme, switchTheme };
};

export default useTheme;
