import normalizeString from '@utils/normalize-string'
import { InstructionsType } from '../data/student-data'

const search = (value: string, instructions: InstructionsType[]) => {
    return instructions.reduce((acc, el) => {
        const foundLinks = el.links.filter((link) => {
            return normalizeString(link.title).includes(normalizeString(value))
        })
        if (!!foundLinks.length) acc.push({ title: el.title, links: foundLinks })

        return acc
    }, [] as InstructionsType[])
}

export default search
