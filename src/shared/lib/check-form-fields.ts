import { CheckboxDocs, IInputArea, IInputAreaData } from '@ui/input-area/model'

const checkFormFields = (form: IInputArea) => {
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    return (
        !(form.data as IInputAreaData[]).find((el) => {
            return el.type !== 'checkbox-docs'
                ? !el.value && el.required
                : el.required && !(el.items as CheckboxDocs[]).find((item) => !!item.files.length)
        }) && isCheckDocument
    )
}

export default checkFormFields
