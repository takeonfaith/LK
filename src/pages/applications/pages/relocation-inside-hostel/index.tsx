import { userModel } from '@entities/user'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import { BaseApplicationWrapper } from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const RelocationInsideHostelPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const isDone = completed ?? false
    const history = useHistory()
    useEffect(() => {
        if (!!user) {
            setForm(getForm(user))
        }
    }, [user])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <Button
                        text="Назад к заявлениям"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <SubmitButton
                        text={'Отправить'}
                        action={() => null}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default RelocationInsideHostelPage
