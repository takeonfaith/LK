import normalizeString from '@utils/normalize-string'
import { Section } from '../ui/molecules/create-application-list'

const createApplicationSearch = (value: string, sections: Section[]) => {
    return sections.reduce((acc, el) => {
        const foundLinks = el.links.filter((link) => {
            return normalizeString(link.title).includes(normalizeString(value))
        })
        if (!!foundLinks.length) acc.push({ title: el.title, links: foundLinks })

        return acc
    }, [] as Section[])
}

export default createApplicationSearch
