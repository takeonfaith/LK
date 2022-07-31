export interface Link {
    title: string
    href: string
    visible: 'all' | 'student' | 'staff'
}

type HelpfulPages = Array<
    {
        title: string
        links: Link[]
    }[]
>

export default HelpfulPages
