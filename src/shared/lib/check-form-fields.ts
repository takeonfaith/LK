import { getSuggestions } from '@pages/hr-applications/lib/divisions'
import { CheckboxDocs, IFormDropdownValue, IInputArea, IInputAreaData } from '@ui/input-area/model'

const checkFormFields = (form: IInputArea, formID?: any) => {
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    //console.log(form.data)
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
            if (el.fieldName == 'newPlaceOfWork' && !getSuggestions().includes(String(el.value))) return true
            if (el.fieldName == 'holiday_end') {
                const dateValue = new Date(el.value as string)
                if (el.value?.toString().substring(el.value.toString().length - 1) == 'Z') return true
                if (el.minValueInput && dateValue < new Date(el.minValueInput)) return true
                if (el.maxValueInput && dateValue > new Date(el.maxValueInput)) return true
            }
            return el.type !== 'checkbox-docs'
                ? !el.value && el.required
                : el.required && !(el.items as CheckboxDocs[]).find((item) => !!item.files.length)
        }) && isCheckDocument
    )
}

export default checkFormFields
