import React, { useCallback, useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    document.documentElement.getAttribute("data-theme") ?? "light"
  );

  useEffect(() => {
    if (!document.documentElement.getAttribute("data-theme"))
      document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const switchTheme = useCallback((state) => {
    setTheme((prev) => {
      const newTheme = state ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", newTheme);

      return newTheme;
    });
  }, []);

  return { theme, switchTheme };
};

export default useTheme;
