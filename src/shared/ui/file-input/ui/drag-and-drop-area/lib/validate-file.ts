import { FileFormats, VALID_FORMATS } from '@consts'

const validateFile = (file: File, allowedTypes?: FileFormats) => {
    return (allowedTypes ?? VALID_FORMATS).indexOf(file.type as (typeof VALID_FORMATS)[number]) !== -1
}

export default validateFile
