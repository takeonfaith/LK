import { FormFeedback } from '@api/model/feedback'
import { feedbackModel } from '@features/feedback'
import getForm from '@features/feedback/lib/get-form'
import { SubmitButton } from '@ui/atoms'
import Block from '@ui/block'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import sendForm from '@utils/send-form'
import React, { useEffect, useState } from 'react'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

export function AskForm() {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, completed } = feedbackModel.selectors.useForm()
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        feedbackModel.effects.getFormFx()
    }, [])
    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    return (
        form && (
            <Block height="fit-content" orientation="vertical" gap="1rem">
                <InputArea {...form} setData={setForm as LoadedState} />
                {!form.collapsed && (
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            sendForm<FormFeedback>(
                                form,
                                feedbackModel.effects.postFormFx,
                                setLoading,
                                feedbackModel.events.changeCompleted,
                            )
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={(completed: boolean) => feedbackModel.events.changeCompleted({ completed })}
                        buttonSuccessText="Отправлено"
                        repeatable={true}
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        popUpFailureMessage={
                            isDone ? 'Форма отправлена' : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                        }
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                )}
            </Block>
        )
    )
}
