import { MAX_FILE_SIZE } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import validateFile from './validate-file'

const loadFiles = (loadedFiles: FileList, files: File[], maxFiles?: number) => {
    if (!!maxFiles && files.length + loadedFiles.length > maxFiles) {
        popUpMessageModel.events.evokePopUpMessage({
            message: `Нельзя загрузить больше ${maxFiles} файлов`,
            type: 'failure',
        })
        return files
    }
    for (let i = 0; i < loadedFiles.length; i++) {
        if (validateFile(loadedFiles[i])) {
            if (loadedFiles[i].size > MAX_FILE_SIZE) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Размер файла слишком большой. Максимальный размер файла: 10 MB',
                    type: 'failure',
                    time: 10000,
                })
                return files
            } else {
                return [...files, loadedFiles[i]]
            }
        } else {
            //  files[i].invalid = true
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Неверный формат файла.',
                type: 'failure',
                time: 5000,
            })
            return files
        }
    }
}

export default loadFiles
