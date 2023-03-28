import { IInputAreaData } from '@ui/input-area/model'
import useCollDate from './HPcontainer';

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'collDog' | null

const getCollDog = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'holiday_type')
    const testField = data.find((item: IInputAreaData) => item.fieldName === 'holiday_start')
    useCollDate(testField?.value as string) 
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'Отпуск по коллективному договору') {
            return 'collDog'
        }
    }
    return null
}

export default getCollDog
