const getTransform = (isOpen: boolean, deltaY: number) => {
    if (deltaY > 0)
        return `translateY(${isOpen ? `${deltaY}px` : '51%'}) translateX(-50%)
	scale(${isOpen ? `calc(1 - ${deltaY / 500})` : '0.95'})`
    else {
        return `translateY(${isOpen ? `0` : '51%'}) translateX(-50%)
		scale(${isOpen ? `calc(1)` : '0.95'})`
    }
}

export default getTransform
