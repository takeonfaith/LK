import React from 'react'
import { HelpfulPages } from '../types/helpful-pages'
import LinksList from '../ui/molecules/links-list'

const getPages = (config: HelpfulPages, isStaff: boolean) => {
    return config.reduce((acc, page) => {
        const { title, content, visible } = page
        if ((visible === 'staff' && isStaff) || (visible === 'student' && !isStaff) || visible === 'all') {
            acc.push({
                title,
                content: <LinksList blocks={content} isStaff={isStaff} title={title} />,
            })
        }

        return acc
    }, [] as { title: string; content: React.ReactNode }[])
}

export default getPages
