import { IInputAreaData } from '@ui/input-area/model'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'personalNature' | null

const getReasonAcademic = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'обстоятельства личного характера') {
            return 'personalNature'
        }
    }
    return null
}

export default getReasonAcademic
