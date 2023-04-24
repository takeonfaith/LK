import { CheckboxDocs, IFormDropdownValue, IInputArea, IInputAreaData } from '@ui/input-area/model'

const checkFormFields = (form: IInputArea, formID?: any) => {
    if ((form.data as IInputAreaData[]).find((el) => (el.value as IFormDropdownValue)?.title == 'Очно')) {
        // Если значение поля типа "dropdown" равно "Очно", сразу возвращаем true, не проверяя другие поля.
        return true
    }
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    return (
        !(form.data as IInputAreaData[]).find((el) => {
            if (el.fieldName == 'holiday_type_coll' && formID == null) return false
            if (el.fieldName == 'holiday_end' && el.value?.toString().substring(el.value.toString().length - 1) == 'Z')
                return true
            return el.type !== 'checkbox-docs'
                ? !el.value && el.required
                : el.required && !(el.items as CheckboxDocs[]).find((item) => !!item.files.length)
        }) && isCheckDocument
    )
}

export default checkFormFields
