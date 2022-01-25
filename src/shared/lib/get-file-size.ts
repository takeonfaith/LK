const getFileSize = (sizeInBytes: number) => {
    if (sizeInBytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(k))
    return parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export default getFileSize
