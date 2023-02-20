import { CheckboxDocs, IFormDropdownValue, IInputArea, IInputAreaData } from '@ui/input-area/model'

const checkFormFields = (form: IInputArea) => {
    if ((form.data as IInputAreaData[]).find((el) => (el.value as IFormDropdownValue)?.title == 'Очно')) {
        // Если значение поля типа "dropdown" равно "Очно", сразу возвращаем true, не проверяя другие поля.
        return true
    }
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
