import { IInputAreaData } from '@ui/input-area/model'
import { getAgeMed } from './age-med'
import { getIsTutor } from './is-tutor'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'Compensation' | 'Compensation2' | null

const getCompensation = (data: IInputAreaData[], date: any): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'isRetirement')
    const isTutor = getIsTutor()
    //console.log(reasonField?.value)
    console.log(isTutor)
    //const age = Number(getAgeMed())
    if (!!reasonField?.value) {
        if (reasonField?.value) {
            return 'Compensation2'
        }
    }
    return null
}

export default getCompensation
