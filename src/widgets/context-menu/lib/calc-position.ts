const calcPosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, width = 265, height = 200) => {
    e.preventDefault()

    return {
        x: e.clientX < window.innerWidth / 2 ? e.clientX : e.clientX - width,
        y: e.clientY < window.innerHeight / 2 ? e.clientY : e.clientY - height,
    }
}

export default calcPosition
