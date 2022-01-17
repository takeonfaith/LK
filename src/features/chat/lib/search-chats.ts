import normalizeString from '@utils/normalize-string'

const searchChats = (value: string, chats: any[]) => {
    return chats.filter((chat) => normalizeString(chat.name).includes(normalizeString(value)))
}

export default searchChats
