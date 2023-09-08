import { CheckboxDocs, IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area/model'
import prepareFormData from '@utils/prepare-form-data'
import { IndexedProperties } from '@utility-types/indexed-properties'
import { applicationsModel } from '@entities/applications'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { SelectPage } from '@features/select'

const globalAppSendForm = async (
    formId: ApplicationFormCodes,
    inputAreas: IInputArea[],
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
    isAttachedFiles = false,
) => {
    setLoading(true)

    const inputs = inputAreas
        .map((listElementForm) => {
            if (isAttachedFiles) return prepareFormData<IndexedProperties>(listElementForm)

            if (!Array.isArray(listElementForm.data[0])) {
                return (listElementForm.data as IInputAreaData[]).map((elementForm) => {
                    return createResultElementForm(elementForm)
                })
            } else {
                const resultNestedElementForm = (listElementForm.data as IComplexInputAreaData).map(
                    (nestedListElementForm) => {
                        return Object.assign(
                            {},
                            ...nestedListElementForm?.map((elementForm) => {
                                return createResultElementForm(elementForm)
                            }),
                        )
                    },
                )
                const obj = {} as IndexedProperties

                obj[formId] = JSON.stringify(resultNestedElementForm)

                return obj
            }
        })
        .flat()

    const files = inputAreas.map((area) => {
        const obj: IndexedProperties = {}
        if (area.documents?.fieldName) {
            for (let fileIndex = 0; fileIndex < area.documents.files.length; fileIndex++) {
                obj[area.documents?.fieldName + `[${fileIndex}]`] = area.documents.files[fileIndex]
            }
        }

        return obj
    })

    const checkboxes = inputAreas.map((area) => {
        const obj: IndexedProperties = {}
        if (area.optionalCheckbox?.fieldName) {
            obj[area.optionalCheckbox?.fieldName] = area.optionalCheckbox.value
        }

        return obj
    })

    const result = Object.assign({}, ...inputs, ...files, ...checkboxes)

    try {
        await applicationsModel.effects.postApplicationFx({ formId: formId, args: result })
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
    }
}

const createResultElementForm = (elementForm: IInputAreaData) => {
    const obj: IndexedProperties = {}

    obj[elementForm?.fieldName ?? ''] = getValueElementForm(elementForm)

    if (elementForm.type === 'multiselect') {
        obj[elementForm?.fieldName ?? ''] = JSON.stringify(
            (elementForm?.value as SelectPage[]).map((itemSelect) => itemSelect.title),
        )
    }

    if (elementForm.type === 'checkbox-docs') {
        return (elementForm.items as CheckboxDocs[])?.reduce((obj, element) => {
            for (let fileIndex = 0; fileIndex < element.files.length; fileIndex++) {
                obj[element?.fieldName + `[${fileIndex}]`] = element.files[fileIndex]
            }
            return obj
        }, {} as { [key: string]: any })
    }

    return obj
}

const getValueElementForm = (elementForm: IInputAreaData) => {
    const isSimpleField = !elementForm.value || typeof elementForm.value !== 'object'
    return isSimpleField ? elementForm?.value : (elementForm.value as SelectPage).title
}

export default globalAppSendForm
