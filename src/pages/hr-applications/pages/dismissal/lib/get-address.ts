import { IInputAreaData } from '@ui/input-area/model'
import { specialFieldsNameConfigT, specialFieldsNameT } from '@entities/applications/consts'

type radioType = { id: number; title: string }

const getAddress = (data: IInputAreaData[]): specialFieldsNameConfigT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'get_tk')
    let resultNameField: specialFieldsNameT = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'По почте') {
            resultNameField = 'Address'
        }
    }
    return { get_tk: resultNameField }
}

export default getAddress
