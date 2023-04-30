import { CheckboxDocs, IFormDropdownValue, IInputArea, IInputAreaData } from '@ui/input-area/model'

const checkFormFields = (form: IInputArea, formID?: any) => {
    if ((form.data as IInputAreaData[]).find((el) => (el.value as IFormDropdownValue)?.title == 'Очно')) {
        // Если значение поля типа "dropdown" равно "Очно", сразу возвращаем true, не проверяя другие поля.
        return true
    }
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    return (
        !(form.data as IInputAreaData[]).find((el) => {
            if (el.type === 'date' && (el.maxValueInput || el.minValueInput)) {
                const parsedDate = new Date(el.value?.toString() ?? 0)
                if (el.minValueInput) {
                    const parsedMinDate = new Date(el.minValueInput)

                    if (parsedDate < parsedMinDate) return true
                }
                if (el.maxValueInput) {
                    const parsedMaxDate = new Date(el.maxValueInput)

                    if (parsedDate > parsedMaxDate) return true
                }
            }

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
