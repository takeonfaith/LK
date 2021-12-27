const prepareTeacherName = (name: string) => {
    return name
        .split(' ')
        .reduce((acc, chunk, i) => (i === 0 ? acc.push(chunk) : acc.push(`${chunk[0]}.`), acc), [] as string[])
        .join(' ')
}

export default prepareTeacherName
