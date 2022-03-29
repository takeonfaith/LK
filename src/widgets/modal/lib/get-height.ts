const getHeight = (open: number, deltaY: number, scrollOnTop: boolean, scrollOnBottom: boolean) => {
    const isOpen = open === 1 || open === 2

    if (!isOpen) return '80%'

    if (open === 1) {
        if (deltaY < 0 && scrollOnBottom) return `calc(80% - ${deltaY}px)`
    } else {
        if (deltaY > 0 && scrollOnTop) return `calc(100% - ${deltaY / 3}px)`
    }
}

export default getHeight
