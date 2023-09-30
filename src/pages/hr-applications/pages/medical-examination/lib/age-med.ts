export const getAgeMed = () => {
    return localStorage.getItem('age')
}

export const setAgeMed = (age: number) => {
    return localStorage.setItem('age', age.toString())
}
