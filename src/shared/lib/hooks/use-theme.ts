import { useCallback, useEffect, useState } from "react";
import { useSettings } from "../contexts/settings-context";

const useTheme = () => {
	const { setting, change } = useSettings<string>("theme");

	const [theme, setTheme] = useState<string>(
		setting ?? document.documentElement.getAttribute("data-theme") ?? "light"
	);

	useEffect(() => {
		if (!setting) {
			if (!document.documentElement.getAttribute("data-theme")) {
				document.documentElement.setAttribute("data-theme", setting);
			}
		} else {
			document.documentElement.setAttribute("data-theme", setting);
		}
	}, [setting]);

	const switchTheme = useCallback((state) => {
		setTheme((prev) => {
			const newTheme = state ? "dark" : "light";

			document.documentElement.setAttribute("data-theme", newTheme);
			change(newTheme);

			return newTheme;
		});
	}, []);

	return { theme, switchTheme };
};

export default useTheme;
