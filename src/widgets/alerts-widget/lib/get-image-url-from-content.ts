import isValidURL from '@shared/lib/is-valid-url'

const getImageURLFromContent = (content: string) => {
    const startIndex = content.indexOf('src="') + 5
    let endIndex = 0
    if (startIndex === -1) return null

    for (let i = startIndex; i < content.length; i++) {
        const letter = content[i]
        if (letter === '"') {
            endIndex = i
            break
        }
    }
    const link = content.slice(startIndex, endIndex)
    return isValidURL(link) ? link : null
}

export default getImageURLFromContent
