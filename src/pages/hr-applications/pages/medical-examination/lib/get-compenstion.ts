import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import { IInputAreaData } from '@ui/input-area/model'

const getCompensation = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'isRetirement')
    if (!!reasonField?.value) {
        if (reasonField?.value) {
            return { reason: 'Compensation2' }
        }
    }
    return { reason: null }
}

export default getCompensation
