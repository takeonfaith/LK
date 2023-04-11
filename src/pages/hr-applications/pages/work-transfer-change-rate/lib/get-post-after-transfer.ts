import { IInputAreaData } from '@ui/input-area/model'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'PartTime' | null

const getPostAfterTransfer = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'employment')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'По совместительству') {
            return 'PartTime'
        }
    }
    return null
}

export default getPostAfterTransfer
