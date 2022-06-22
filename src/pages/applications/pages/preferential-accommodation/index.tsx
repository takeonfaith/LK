import { userModel } from '@entities/user'
import { BaseApplicationWrapper } from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PreferentialAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    // const [familyStatus, setFamilyStatus] = useState<IInputArea | null>(null)
    // const [family, setFamily] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!user) {
            setForm(getForm(user))
            // setFamily(getFamily(user, isDone))
            // setFamilyStatus(getFamilyStatus(user, isDone))
        }
    }, [user])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {/*<InputArea {...familyStatus} collapsed={isDone} setData={setFamilyStatus as LoadedState} divider />*/}
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

export default PreferentialAccommodationPage
