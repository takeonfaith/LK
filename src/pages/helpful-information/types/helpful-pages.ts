type Visibility = 'all' | 'student' | 'staff'

export type Link = {
    title: string
    href: string
    visible: Visibility
}

export type HelpfulPage = {
    title: string
    links: Link[]
}

export type HelpfulPages = {
    title: string
    visible: Visibility
    content: HelpfulPage[]
}[]
