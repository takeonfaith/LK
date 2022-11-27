import { popUpMessageModel } from '@entities/pop-up-message'
import { IInputArea } from '@ui/input-area/model'
import prepareFormData from '@utils/prepare-form-data'
import { Effect, Event } from 'effector'

const sendForm = async <T>(
    form: IInputArea,
    post: Effect<T, void, Error>,
    setLoading: (loading: boolean) => void,
    setCompleted: Event<{
        completed: boolean
    }>,
    formId?: string,
) => {
    setLoading(true)
    const data = prepareFormData<T>(form)

    try {
        await post({ ...data, formId: formId })
        // await post(data)
        setLoading(false)
        setCompleted({ completed: true })
    } catch (error) {
        setLoading(false)

        popUpMessageModel.events.evokePopUpMessage({
            message: `${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default sendForm
