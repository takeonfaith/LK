export const getIsTutor = () => {
    return localStorage.getItem('isTutor')
}

export const setIsTutor = (isTutor: boolean) => {
    return localStorage.setItem('isTutor', isTutor.toString())
}
