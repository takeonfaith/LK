import { FileFormats } from '@shared/constants'

const getFormatName = (format: FileFormats[number]) => {
    return format.split('/')[1]
}

export default getFormatName
