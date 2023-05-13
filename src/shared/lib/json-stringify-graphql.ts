export const jsonStringifyGraphql = <T>(obj: T, clearKeys: (keyof T)[] = []) => {
    let result = JSON.stringify(obj)
    clearKeys.forEach((key) => {
        const regex = new RegExp(`"${String(key)}":"([^"]+)"`, 'g')
        result = result.replace(regex, `${String(key)}: $1`)
    })
    return result.replace(/"([^"]+)":/g, '$1:')
}
