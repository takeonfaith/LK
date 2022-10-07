const getGreetingMessage = (name: string) => {
    const date = new Date()
    const hours = date.getHours()

    if (hours > 0 && hours <= 3) return `Доброй ночи, ${name}`
    else if (hours > 4 && hours < 7) return `Доброе утро, ${name}. Раненько вы сегодня...`
    else if (hours >= 7 && hours < 12) return `Доброе утро, ${name}`
    else if (hours >= 12 && hours < 16) return `Добрый день, ${name}`
    else return `Добрый вечер, ${name}`
}

export default getGreetingMessage
