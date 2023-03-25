import { IInputArea } from '@ui/input-area/model'
import { bufferMedicalExaminationModel } from '../pages/buffer-medical-examination/model'

const SendHrFormMedicalExamination = async (
    employeeId: string,
    inputAreas: IInputArea[],
    setCompleted: (loading: boolean) => void,
) => {
    setCompleted(false)

    const form = inputAreas
        .map((itemForm) => {
            if (!Array.isArray(itemForm.data[0])) {
                return itemForm.data.map((l) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!l?.fieldName) obj[l?.fieldName ?? ''] = typeof l.value !== 'object' ? l?.value : l.value.title
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (l.type === 'multiselect') {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        obj[l?.fieldName ?? ''] = JSON.stringify(l?.value.map((itemSelect) => itemSelect.title))
                    }

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
                obj[employeeId] = JSON.stringify(r)
                return obj
            }
        })
        .flat()

    const result = Object.assign({}, ...form)

    const response = await bufferMedicalExaminationModel.effects.sendBufferMedicalExaminationFx({
        employeeGuid: result.jobGuid,
        start: result.holiday_work_date,
        end: result.extra_holiday_date,
    })

    !response.isError && setCompleted(true)
}

export default SendHrFormMedicalExamination
