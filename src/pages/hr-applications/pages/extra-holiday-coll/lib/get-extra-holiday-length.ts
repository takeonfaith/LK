import { IInputAreaData } from '@ui/input-area/model'

type radioType = { id: number; title: string }

type specialReasonFieldsNameT =
    | 'collHoliday1'
    | 'collHoliday2'
    | 'collHoliday3'
    | 'collHoliday4'
    | 'collHoliday5'
    | null

const getExtraHolidayLength = (data: IInputAreaData[]): specialReasonFieldsNameT => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (
            valueReason.title ===
                'Сопровождение детей младшего школьного возраста в школу в первый день учебного года' ||
            valueReason.title === 'Стаж работы в Университете от 20 до 25 лет'
        )
            return 'collHoliday1'
        else if (valueReason.title === 'Стаж работы в Университете от 25 до 30 лет') return 'collHoliday2'
        else if (
            valueReason.title === 'Двое и более детей в возрасте до 14 лет' ||
            valueReason.title === 'В случаях рождения ребенка, регистрации брака, смерти близких родственников' ||
            valueReason.title === 'Стаж работы в Университете от 30 до 35 лет'
        )
            return 'collHoliday3'
        else if (valueReason.title === 'Стаж работы в Университете свыше 35 лет') return 'collHoliday4'
        else if (
            valueReason.title === 'Одиноким матерям/отцам' ||
            valueReason.title === 'Ребенок-инвалид в возрасте до 18 лет'
        )
            return 'collHoliday5'
    }
    return null
}

export default getExtraHolidayLength
