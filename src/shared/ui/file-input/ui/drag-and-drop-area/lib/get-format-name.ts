import { FileFormats } from '@shared/constants/consts'

const getFormatName = (format: FileFormats[number]) => {
    return format.split('/')[1]
}

export default getFormatName
