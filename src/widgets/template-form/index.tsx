import { Loading, SubmitButton, Title } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { Message } from '@ui/message'
import checkFormFields from '@utils/check-form-fields'
import localizeDate from '@utils/localize-date'
import sendForm from '@utils/send-form'
import React, { useEffect, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { TemplateFormStoreOutput } from 'shared/effector/create-form-store'

export type TemplateFormProps<T extends { last_update?: string }> = {
    model: TemplateFormStoreOutput<T, T>
    getForm: (data: T) => IInputArea
    repeatable?: boolean
    successMessage?: string
    isAvailableToSend?: boolean
    formId?: string
}

export type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const TemplateForm = <T extends { last_update?: string }>({
    model,
    getForm,
    successMessage,
    outerForm,
    isAvailableToSend = true,
    repeatable = true,
    formId
}: TemplateFormProps<T> & { outerForm?: IInputArea | null }) => {
    const { data, completed } = model.selectors.useForm()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<IInputArea | null>(null)
    const isDone = (completed || !isAvailableToSend) ?? false

    useEffect(() => {
        if (!!data) {
            setForm(outerForm ?? getForm(data))
        }
    }, [data])

    if (!form || !setForm) return <Loading />

    return (
        <>
            <InputArea {...form} collapsed={isDone && !repeatable} setData={setForm as LoadedState} />
            <Message title="Информация по заявке" type="info" icon={<FiInfo />} visible={isDone && !!successMessage}>
                {successMessage}
            </Message>
            {data?.last_update && <Title size={5}>Дата последней отправки: {localizeDate(data.last_update)}</Title>}
            <SubmitButton
                text={isAvailableToSend ? 'Отправить' : 'Отправлено'}
                action={() => sendForm<T>(form, model.effects.postFormFx, setLoading, model.events.changeCompleted, formId)}
                isLoading={loading}
                completed={completed}
                setCompleted={(completed: boolean) => model.events.changeCompleted({ completed })}
                buttonSuccessText="Отправлено"
                repeatable={repeatable}
                isDone={isDone && !repeatable}
                isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                popUpFailureMessage={
                    isDone ? 'Форма отправлена' : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                }
                popUpSuccessMessage="Данные формы успешно отправлены"
            />
        </>
    )
}

export default TemplateForm
