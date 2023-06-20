export interface Rules {
    zero: string
    one: string
    twoToFour: string
    fiveToNine: string
}

const getCorrectWordForm = (amount: number, rules: Rules) => {
    const normalized = amount % 10
    if (normalized === 0) return rules.zero
    if (normalized === 1) return rules.one
    if (normalized >= 2 && normalized <= 4) return rules.twoToFour

    return rules.fiveToNine
}

export default getCorrectWordForm
