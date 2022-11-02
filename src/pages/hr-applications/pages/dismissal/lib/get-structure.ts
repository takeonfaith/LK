import { IInputAreaData } from '@ui/input-area/model'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'Structure1' | 'Structure2' | null

const getStructure = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'post')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'Старший преподаватель') {
            return 'Structure1'
        } else if (valueReason.title === 'Директор по цифровой трансформации') {
            return 'Structure2'
        }
    }
    return null
}

export default getStructure
