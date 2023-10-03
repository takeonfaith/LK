export const getSubjectName = (name: string): { name: string; link?: string } => {
    // Парсинг и нормализация гениального решения встроить ссылку прямо в название предмента
    if (name.includes('https://')) {
        const splitted = name.split(' ')
        const linkIndex = splitted.findIndex((el) => el.includes('https'))

        const link = splitted.splice(linkIndex, linkIndex + 1)[0]
        return {
            name: splitted.join(' '),
            link,
        }
    }

    return { name }
}
