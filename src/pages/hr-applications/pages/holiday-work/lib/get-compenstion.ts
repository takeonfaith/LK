import { IInputAreaData } from '@ui/input-area/model'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT = 'Compensation' | null

const getCompensation = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'compensation')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (
            valueReason.title ===
            'Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха'
        ) {
            return 'Compensation'
        }
    }
    return null
}

export default getCompensation
