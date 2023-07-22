import { IInputAreaData } from '@ui/input-area/model'
import { SpecialFieldsNameConfig, SpecialFieldsName } from '@entities/applications/consts'

type radioType = { id: number; title: string }

const getExtraHolidayLength = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (
            valueReason.title ===
                'Сопровождение детей младшего школьного возраста в школу в первый день учебного года' ||
            valueReason.title === 'Стаж работы в Университете от 20 до 25 лет'
        )
            resultNameField = 'collHoliday1'
        else if (valueReason.title === 'Стаж работы в Университете от 25 до 30 лет') resultNameField = 'collHoliday2'
        else if (
            valueReason.title === 'Двое и более детей в возрасте до 14 лет' ||
            valueReason.title === 'В случаях рождения ребенка, регистрации брака, смерти близких родственников' ||
            valueReason.title === 'Стаж работы в Университете от 30 до 35 лет'
        )
            resultNameField = 'collHoliday3'
        else if (valueReason.title === 'Стаж работы в Университете свыше 35 лет') resultNameField = 'collHoliday4'
        else if (
            valueReason.title === 'Одиноким матерям/отцам' ||
            valueReason.title === 'Ребенок-инвалид в возрасте до 18 лет'
        )
            resultNameField = 'collHoliday5'
    }
    return { reasonExtraHoliday: resultNameField }
}

export default getExtraHolidayLength
