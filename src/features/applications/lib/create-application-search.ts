import normalizeString from '@utils/normalize-string'
import { Section } from '../ui/molecules/create-application-list'

const createApplicationSearch = (value: string, sections: Section[]) => {
    return sections.filter(
        (application) =>
            !!application.links.find((link) => normalizeString(link.title).includes(normalizeString(value))),
    )
}

export default createApplicationSearch
