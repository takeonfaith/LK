import { superiorRoomApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'
import { CheckboxDocs, IInputArea, IInputAreaData } from '@ui/input-area/model'

const sendForm = (
    form: IInputArea,
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
) => {
    setLoading(true)
    const data = (form.data as IInputAreaData[]).reduce((acc, item) => {
        if (item.type === 'checkbox-docs') {
            const files = (item.items as CheckboxDocs[])?.reduce((obj, element) => {
                obj[element.fieldName] = element.files[0]
                return obj
            }, {} as { [key: string]: any })
            acc = Object.assign({}, acc, files)
        } else if (item.type === 'select') {
            acc[item.fieldName] = (item.value as SelectPage).title
        } else {
            acc[item.fieldName] = item.value
        }
        return acc
    }, {} as { [key: string]: any })
    // // eslint-disable-next-line no-console
    // console.log(data)
    try {
        superiorRoomApi.post(data)
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        popUpMessageModel.events.evokePopUpMessage({
            message: `Не удалось отправить форму. Ошибка: ${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default sendForm
