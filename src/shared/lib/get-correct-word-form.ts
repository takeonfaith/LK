export interface Rules {
    zero: string
    one: string
    twoToFour: string
    fiveToNine: string
}

const getCorrectWordForm = (amount: number, rules: Rules) => {
    if (amount === 0) return rules.zero
    if (amount === 1) return rules.one
    if (amount >= 2 && amount <= 4) return rules.twoToFour

    return rules.fiveToNine
}

export default getCorrectWordForm
