import { IInputArea } from '@ui/input-area/model'
import { bufferHolidayPlanningModel } from '../pages/buffer-holiday-planning/model'

const sendHrFormHolidayPlanning = async (
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

    if (result.holiday_type == 'Ежегодный (основной) оплачиваемый отпуск') result.holiday_type = 1
    else if (result.holiday_type == 'Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)')
        result.holiday_type = 2
    else if (result.holiday_type == 'Отпуск без сохранения заработной платы') result.holiday_type = 3
    else if (result.holiday_type == 'Отпуск по коллективному договору') result.holiday_type = 4

    const response = await bufferHolidayPlanningModel.effects.sendBufferHolidayPlanningFx({
        employeeGuid: result.jobGuid,
        type: result.holiday_type,
        start: result.holiday_start,
        end: result.holiday_end,
    })

    !response.isError && setCompleted(true)
}

export default sendHrFormHolidayPlanning
