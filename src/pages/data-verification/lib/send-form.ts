/* eslint-disable no-console */
import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { IInputArea } from '@ui/input-area/model'

const sendForm = (
    inputAreas: IInputArea[],
    setSubmitLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
    setSubmitLoading(true)

    const form = inputAreas
        .map((t) => {
            if (!Array.isArray(t.data[0])) {
                return t.data.map((t) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!t?.fieldName) obj[t?.fieldName ?? ''] = t?.value
                    return obj
                })
            } else {
                const r = t.data.map((c) => {
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

                const name = t.title == 'Состав семьи' ? 'family' : 'langs'

                obj[name] = r

                return obj
            }
        })
        .flat()

    const files = inputAreas.map((area) => {
        const obj = {}
        if (area.documents?.fieldName) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            obj[area.documents?.fieldName] = area.documents.files
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

    console.log(result)

    teacherDateVerificationModel.events.postTeacherDataVerification(result)
    setSubmitLoading(false)
    setCompleted(true)
}

export default sendForm
