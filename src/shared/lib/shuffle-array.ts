const shuffleArray = (array: any[]) => {
    const result = [...array]
    let currentIndex = array.length
    let randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]]
    }

    return result
}

export default shuffleArray
