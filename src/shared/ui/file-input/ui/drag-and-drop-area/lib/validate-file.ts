import { VALID_FORMATS } from '@consts'

const validateFile = (file: File, allowedTypes?: string[]) => {
    if ((allowedTypes ?? VALID_FORMATS).indexOf(file.type) === -1) {
        return false
    }
    return true
}

export default validateFile
