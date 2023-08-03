const findSemestr = (date: string, course: number | string) => {
    const month = new Date(date).getMonth()

    return month > 1 && month < 7 ? +course * 2 - 1 : +course * 2
}

export default findSemestr
