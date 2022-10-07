const removeFile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string, files: File[]) => {
    e.preventDefault()
    e.stopPropagation()
    const tempFiles = files.filter((file) => file.name !== name)

    return [...tempFiles]
}

export default removeFile
