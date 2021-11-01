import { useEffect, useRef } from "react";

export const useRender = (string: string) => {
	const count = useRef(1);

	useEffect(() => {
		count.current++;
	})

	console.log(`${string}: ${count.current}`);
}