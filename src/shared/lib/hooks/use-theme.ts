import { useCallback, useEffect, useState } from "react";
import { useSettings } from "../contexts/settings-context";
import useLocalStorage from "./use-local-storage";

const useTheme = () => {
	const { setting, change } = useSettings('theme');

	const [theme, setTheme] = useState<string>(
		setting as string ??
		document.documentElement.getAttribute("data-theme") ??
		"light"
	);

	useEffect(() => {
		if (!setting) {
			if (!document.documentElement.getAttribute("data-theme")) {
				document.documentElement.setAttribute("data-theme", setting as string);
			}
		} else {
			document.documentElement.setAttribute("data-theme", setting as string);
		}
	}, [setting]);

	const switchTheme = useCallback(
		(state) => {
			setTheme((prev) => {
				const newTheme = state ? "dark" : "light";

				document.documentElement.setAttribute("data-theme", newTheme);
				change(newTheme);

				return newTheme;
			});
		},
		[]
	);

	return { theme, switchTheme };
};

export default useTheme;
