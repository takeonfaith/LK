import { CenterPage, Error, FormBlock, SubmitButton, Title, Wrapper } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { Message } from '@ui/message'
import checkFormFields from '@utils/check-form-fields'
import localizeDate from '@utils/localize-date'
import sendForm from '@utils/send-form'
import React, { useEffect, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { TemplateFormStoreOutput } from 'shared/effector/create-form-store'

interface Props<T extends { last_update?: string }> {
    model: TemplateFormStoreOutput<T, T>
    getForm: (data: T) => IInputArea
    isAvailableToSend?: boolean
    successMessage?: string
    pageAvailability?: {
        isAvailable: boolean
        text?: string
    }
    repeatable?: boolean
}

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const TemplateFormPage = <T extends { last_update?: string }>({
    model,
    getForm,
    successMessage,
    pageAvailability,
    isAvailableToSend = true,
    repeatable = true,
}: Props<T>) => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, error, completed } = model.selectors.useForm()
    const [loading, setLoading] = useState(false)
    const isDone = (completed || !isAvailableToSend) ?? false

    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    if ((!!pageAvailability && !pageAvailability?.isAvailable) ?? false) {
        return <Error text={pageAvailability?.text ?? 'Вам не доступен этот раздел'} />
    }

    return (
        <Wrapper load={() => model.effects.getFormFx()} error={error} data={form}>
            <CenterPage className="">
                {!!form && !!setForm && (
                    <FormBlock>
                        <InputArea {...form} collapsed={isDone && !repeatable} setData={setForm as LoadedState} />
                        <Message
                            title="Информация по заявке"
                            type="info"
                            icon={<FiInfo />}
                            visible={isDone && !!successMessage}
                        >
                            {successMessage}
                        </Message>
                        {data?.last_update && (
                            <Title size={5}>Дата последней отправки: {localizeDate(data.last_update)}</Title>
                        )}
                        <SubmitButton
                            text={isAvailableToSend ? 'Отправить' : 'Отправлено'}
                            action={() =>
                                sendForm<T>(form, model.effects.postFormFx, setLoading, model.events.changeCompleted)
                            }
                            isLoading={loading}
                            completed={completed}
                            setCompleted={(completed: boolean) => model.events.changeCompleted({ completed })}
                            buttonSuccessText="Отправлено"
                            repeatable={repeatable}
                            isDone={isDone && !repeatable}
                            isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                            popUpFailureMessage={
                                isDone
                                    ? 'Форма отправлена'
                                    : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                            }
                            popUpSuccessMessage="Данные формы успешно отправлены"
                        />
                    </FormBlock>
                )}
            </CenterPage>
        </Wrapper>
    )
}

export default TemplateFormPage
