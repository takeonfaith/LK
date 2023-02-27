const generatePassword = (length: number) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let index = 0; index < length; index++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return result
}

export default generatePassword
