import { IInputAreaData } from '@ui/input-area/model'

type specialReasonFieldsNameT = 'Compensation' | 'Compensation2' | null

const getCompensation = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'isRetirement')
    if (!!reasonField?.value) {
        if (reasonField?.value) {
            return 'Compensation2'
        }
    }
    return null
}

export default getCompensation
