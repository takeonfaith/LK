import { IInputAreaData } from '@ui/input-area/model'
import { specialFieldsNameConfigT, specialFieldsNameT } from '@entities/applications/consts'

type radioType = { id: number; title: string }

const getReasonForReceiving = (data: IInputAreaData[]): specialFieldsNameConfigT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')
    let resultNameField: specialFieldsNameT = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'отчислением из') {
            resultNameField = 'dueToWithdrawal'
        }
    }
    return { reason: resultNameField }
}

export default getReasonForReceiving
