import { popUpMessageModel } from '@entities/pop-up-message'
import { IInputArea } from '@ui/input-area/model'
import prepareFormData from '@utils/prepare-form-data'
import { IndexedProperties } from '@utility-types/indexed-properties'
import { applicationsModel } from '@entities/applications'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'

const globalAppSendForm = async (
    formId: ApplicationFormCodes,
    inputAreas: IInputArea[],
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
    isAttachedFiles = false,
) => {
    setLoading(true)

    const form = inputAreas
        .map((itemForm) => {
            if (isAttachedFiles) return prepareFormData<IndexedProperties>(itemForm)
            if (!Array.isArray(itemForm.data[0])) {
                return itemForm.data.map((l) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!l?.fieldName) obj[l?.fieldName ?? ''] = typeof l.value !== 'object' ? l?.value : l.value.title
                    return obj
                })
            } else {
                const r = itemForm.data.map((c) => {
                    return Object.assign(
                        {},
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        ...c?.map((r) => {
                            const obj = {}
                            if (!!r?.fieldName)
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                obj[r?.fieldName] = !!r?.value?.title ? r?.value?.title : r?.value
                            return obj
                        }),
                    )
                })
                const obj = {} as any

                obj[formId] = JSON.stringify(r)

                return obj
            }
        })
        .flat()

    const files = inputAreas.map((area) => {
        const obj = {}
        if (area.documents?.fieldName) {
            for (let fileIndex = 0; fileIndex < area.documents.files.length; fileIndex++) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                obj[area.documents?.fieldName + `[${fileIndex}]`] = area.documents.files[fileIndex]
            }
        }

        return obj
    })

    const checkboxes = inputAreas.map((area) => {
        const obj = {}
        if (area.optionalCheckbox?.fieldName) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            obj[area.optionalCheckbox?.fieldName] = area.optionalCheckbox.value
        }

        return obj
    })

    const result = Object.assign({}, ...form, ...files, ...checkboxes)
    try {
        await applicationsModel.effects.postApplicationFx({ formId: formId, args: result })
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
        popUpMessageModel.events.evokePopUpMessage({
            message: `Не удалось отправить форму. Ошибка2: ${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default globalAppSendForm
