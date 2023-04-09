import { SelectPage } from '@features/select'
import { IInputAreaData } from '@ui/input-area/model'

//type radioType = { id: number; title: string; data?: number | string }

type specialReasonFieldsNameT = 'collDog' | null

const getCollDog = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'holiday_type')
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as SelectPage
        if (valueReason.title === 'Отпуск по коллективному договору') {
            return 'collDog'
        }
    }
    return null
}

export default getCollDog
