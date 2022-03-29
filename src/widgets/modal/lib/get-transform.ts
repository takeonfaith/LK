const getTransform = (open: number, deltaY: number, scrollOnTop: boolean) => {
    const isOpen = open === 1 || open === 2
    if (!isOpen) return '100%'

    if (deltaY > 0 && scrollOnTop) {
        return deltaY + 'px'
    }

    return '0px'
}

export default getTransform
