import { SelectPage } from '@features/select'
import { CheckboxDocs, IInputArea, IInputAreaData } from '@ui/input-area/model'

const prepareFormData = <T>(form: IInputArea) => {
    return (form.data as IInputAreaData[]).reduce((acc, item) => {
        if (item.type === 'checkbox-docs') {
            const files = (item.items as CheckboxDocs[])?.reduce((obj, element) => {
                for (let fileIndex = 0; fileIndex < element.files.length; fileIndex++) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    obj[element?.fieldName + `[${fileIndex}]`] = element.files[fileIndex]
                }

                return obj
            }, {} as { [key: string]: any })
            acc = Object.assign({}, acc, files)
        } else if (item.type === 'select') {
            acc[item.fieldName] = !!item.isSpecificSelect
                ? (item.value as SelectPage).id
                : (item.value as SelectPage).title
        } else {
            acc[item.fieldName] = item.value
        }
        return acc
    }, {} as { [key: string]: any }) as T
}

export default prepareFormData
