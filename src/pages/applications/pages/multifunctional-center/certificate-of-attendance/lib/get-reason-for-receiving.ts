import { IInputAreaData } from '@ui/input-area/model'
import { SpecialFieldsNameConfig, SpecialFieldsName } from '@entities/applications/consts'

type radioType = { id: number; title: string }

const getReasonForReceiving = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'отчислением из') {
            resultNameField = 'dueToWithdrawal'
        }
    }
    return { reason: resultNameField }
}

export default getReasonForReceiving
