import { IInputAreaData } from '@ui/input-area/model'
import { getAgeMed } from './age-med'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'Compensation' | 'Compensation2' | null

const getCompensation = (data: IInputAreaData[], date: any): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'isRetirement')
    console.log(reasonField?.value)
    const age = Number(getAgeMed())
    if (!!age || !!reasonField?.value) {
        if ((age >= 25 && !reasonField?.value) || (age < 25 && reasonField?.value)) {
            return 'Compensation'
        }
        if (age >= 25 && reasonField?.value) {
            return 'Compensation2'
        }
    }
    return null
}

export default getCompensation
