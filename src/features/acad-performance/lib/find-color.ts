const findColor = (percentage: number): string => {
    if (percentage >= 0.8) return '#69CD91'
    else if (percentage >= 0.6) return '#697bcd'
    else if (percentage >= 0.5) return '#ee9e44'
    else return '#cd6c69'
}

export default findColor
