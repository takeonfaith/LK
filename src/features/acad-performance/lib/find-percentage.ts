function findPercentage(data: any, where: string, circleMode = 0): number {
    let counter = 0

    data[where].map((subject: any) => {
        if (where !== 'exams') {
            if (subject.grade !== false) counter++
        } else {
            if (circleMode === 0) {
                if (subject.grade > 2) counter++
            } else if (circleMode === 1) {
                if (subject.grade === 5) counter++
            } else {
                if (subject.grade === 4) counter++
            }
        }
    })

    const perc = (counter / data[where].length).toPrecision(2)

    return +perc
}

export default findPercentage
