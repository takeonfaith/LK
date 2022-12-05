export interface Chat {
    id: string
    companion: {
        id: string
        name: string
        avatar: string | null | undefined
    }
    lastMessage: {
        message: string
        sentTime: string
    }
    amountOfUnreadMessages: number
}
