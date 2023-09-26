import { Message, Messages } from '@api/model'
import localizeDate from '@shared/lib/dates/localize-date'

const avatars = {
    'Peter Parker':
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Andrew_Garfield_Spider-Man.jpg/220px-Andrew_Garfield_Spider-Man.jpg',
    'Kostya Doloz':
        'https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg',
} as { [key: string]: string }

const prepareMessages = (messages: Messages) => {
    const result = {} as { [key: number]: { avatar?: string; messages: Message[]; date: string | null } }
    let index = 0
    let lastDate = ''

    messages.forEach((message, i, arr) => {
        if (
            arr[i - 1]?.sender !== message.sender ||
            localizeDate(arr[i - 1].sentTime) !== localizeDate(message.sentTime) ||
            !arr[i - 1]
        ) {
            index++
        }

        if (result[index]) result[index].messages.push(message)
        else {
            result[index] = {
                messages: [message],
                avatar: avatars[message.sender as keyof { [key: string]: string }],
                date: localizeDate(message.sentTime) !== lastDate ? localizeDate(message.sentTime) : null,
            }

            lastDate = localizeDate(message.sentTime)
        }
    })

    return result
}

export default prepareMessages
