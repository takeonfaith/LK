import { SelectPage } from '@features/select'
import { CheckboxDocs, IInputArea, IInputAreaData } from '@ui/input-area/model'
import { IndexedProperties } from '@shared/models/indexed-properties'

const prepareFormData = <T>(form: IInputArea) => {
    const inputs = (form.data as IInputAreaData[]).reduce((acc, item) => {
        if (!item.value) return acc
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
                : (item.value as SelectPage).title || null
        } else {
            const isSimpleField = !item.value || typeof item.value !== 'object'
            acc[item.fieldName] = isSimpleField ? item?.value : (item.value as SelectPage).title
        }
        return acc
    }, {} as { [key: string]: any }) as T

    const files = () => {
        const obj: IndexedProperties = {}
        if (form.documents?.fieldName) {
            for (let fileIndex = 0; fileIndex < form.documents.files.length; fileIndex++) {
                obj[form.documents?.fieldName + `[${fileIndex}]`] = form.documents.files[fileIndex]
            }
        }

        return obj
    }

    return { ...inputs, ...files() }
}

export default prepareFormData
