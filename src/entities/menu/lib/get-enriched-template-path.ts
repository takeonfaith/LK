export const getEnrichedTemplatePath = (template: string, variables: Record<string, string>) => {
    const splitted = template.split('/')
    const changed = splitted.reduce((acc, el) => {
        if (el[0] === ':') {
            const a = variables[el.slice(1, el.length)]
            if (a) {
                acc.push(a)
            }
        } else {
            acc.push(el)
        }
        return acc
    }, [] as string[])

    return changed.join('/')
}
