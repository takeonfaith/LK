import { createStore } from 'effector'

const chats = [
    {
        avatar: undefined,
        name: 'Стелла',
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: '12:23',
        },
        chatId: '1',
        amountOfUnreadMessages: 10,
    },
    {
        avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/df/Andrew_Garfield_as_Spider-Man.jpg/280px-Andrew_Garfield_as_Spider-Man.jpg',
        name: 'Питер Паркер',
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: '12:23',
        },
        chatId: '2',
        amountOfUnreadMessages: 0,
    },
    {
        avatar: undefined,
        name: 'Рафаэль',
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: '12:23',
        },
        chatId: '3',
        amountOfUnreadMessages: 0,
    },
    {
        avatar: undefined,
        name: 'Леонардо',
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: '12:23',
        },
        chatId: '4',
        amountOfUnreadMessages: 0,
    },
    {
        avatar: undefined,
        name: 'Бред Питт',
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: '12:23',
        },
        chatId: '5',
        amountOfUnreadMessages: 0,
    },
]

const $chats = createStore<any>([])

export const selectors = {}
