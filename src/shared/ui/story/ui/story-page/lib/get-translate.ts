import { Align, VerticalAlign } from '@ui/types'

const getTranslate = (align: { horizontal: Align; vertical: VerticalAlign }) => {
    return `translate(${align.horizontal === 'center' ? '-50%' : '0px'}, ${
        align.vertical === 'center' ? '-50%' : '0px'
    })})`
}

export default getTranslate
