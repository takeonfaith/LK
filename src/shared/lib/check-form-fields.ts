import { CheckboxDocs, IInputArea, IInputAreaData } from '@ui/input-area/model'
import { specialFieldsNameT } from '@entities/applications/consts'

const checkFormFields = (form: IInputArea, listOptionalFields?: specialFieldsNameT[]) => {
    const isCheckDocument = !form.documents?.required || !!form.documents.files.length
    const isCheckNewElementForm = !form.addNew || !!form.data.length
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
            if (!!listOptionalFields && !!el.specialType && !listOptionalFields.includes(el.specialType)) {
                return false
            }

            return el.type !== 'checkbox-docs'
                ? !el.value && el.required
                : el.required && !(el.items as CheckboxDocs[]).find((item) => !!item.files.length)
        }) &&
        isCheckDocument &&
        isCheckNewElementForm
    )
}

export default checkFormFields
