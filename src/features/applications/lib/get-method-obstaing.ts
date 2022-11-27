import { IInputAreaData } from '@ui/input-area/model'
import { specialFieldsNameT } from '@entities/applications/consts'

type radioType = { id: number; title: string }

const getMethodObtaining = (data: IInputAreaData[]): specialFieldsNameT => {
    const methodObtainingField = data.find((item: IInputAreaData) => item.fieldName === 'method_obtaining')

    if (!!methodObtainingField?.value) {
        const valueMethod = methodObtainingField?.value as radioType
        if (valueMethod.title === 'На электронную почту') {
            return null
        } else if (valueMethod.title === 'Лично') {
            return 'personalMethod'
        } else if (valueMethod.title === 'На почтовый адрес') {
            return 'postMethod'
        }
    }
    return null
}

export default getMethodObtaining
