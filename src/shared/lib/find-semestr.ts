const findSemestr = (date: string, course: number | string) => {
    const month = new Date(date).getMonth()
    return month > 1 && month < 8 ? +course * 2 : +course * 2 - 1
}

export default findSemestr
