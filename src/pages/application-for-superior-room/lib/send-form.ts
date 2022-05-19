import { superiorRoomApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { IInputArea } from '@ui/input-area/model'
import { IndexedProperties } from '@utility-types/indexed-properties'
import prepareFormData from '@utils/prepare-form-data'

const sendForm = (
    form: IInputArea,
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
) => {
    setLoading(true)
    const data = prepareFormData<IndexedProperties>(form)

    try {
        superiorRoomApi.post(data)
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
        popUpMessageModel.events.evokePopUpMessage({
            message: `Не удалось отправить форму. Ошибка: ${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default sendForm
