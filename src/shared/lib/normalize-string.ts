const normalizeString = (str: string) => {
    if (!str.length) return ''
    return str
        .replace(/\s/g, '')
        .replace(/\$/g, 's')
        .replace(/[,'._/]/g, '')
        .replace(/-/g, '')
        .toLowerCase()
}

export default normalizeString
