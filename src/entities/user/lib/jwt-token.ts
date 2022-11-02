export const getJwtToken = () => {
    return localStorage.getItem('jwt')
}

export const setJwtToken = (token: string) => {
    return localStorage.setItem('jwt', token)
}
