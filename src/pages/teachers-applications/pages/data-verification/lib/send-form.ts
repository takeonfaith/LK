import { popUpMessageModel } from '@entities/pop-up-message'
import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { IInputArea } from '@ui/input-area/model'

const sendForm = (inputAreas: IInputArea[], setSubmitLoading: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setSubmitLoading(true)

    const form = inputAreas
        .map((t) => {
            if (!Array.isArray(t.data[0])) {
                return t.data.map((l) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!l?.fieldName) obj[l?.fieldName ?? ''] = typeof l.value !== 'object' ? l?.value : l.value.title
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
                obj[name] = JSON.stringify(r)

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
    // console.log(result)

    try {
        teacherDateVerificationModel.events.postTeacherDataVerification(result)
        setSubmitLoading(false)
        teacherDateVerificationModel.events.changeCompleted({ completed: true })
    } catch (error) {
        setSubmitLoading(false)
        popUpMessageModel.events.evokePopUpMessage({
            message: `Не удалось отправить форму. Ошибка: ${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default sendForm
