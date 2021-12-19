const localizeDate = (date: string | null | undefined): string => {
    if (!date) return ''
    return (
        new Date(Date.parse(date)).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) ?? ''
    )
}

export default localizeDate
