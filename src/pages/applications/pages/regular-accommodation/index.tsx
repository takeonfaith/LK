import { userModel } from '@entities/user'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import { useHistory } from 'react-router'
import getDisability from '@pages/applications/pages/regular-accommodation/lib/get-disability'
import getRegistration from '@pages/applications/pages/regular-accommodation/lib/get-registration'
import getAdditionally from '@pages/applications/pages/regular-accommodation/lib/get-additionally'
import globalAppSendForm from '@pages/applications/lib/global-app-send-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const RegularAccommodationPage = () => {
    const currentFormId = 'usg_gethostel_ooz'
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const history = useHistory()

    useEffect(() => {
        if (!!user) {
            setForm(getForm(user))
            setDisability(getDisability())
            setRegistration(getRegistration())
            setAdditionally(getAdditionally())
        }
    }, [user])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!registration && !!disability && !!additionally && (
                <FormBlock>
                    <Button
                        text="Назад к заявлениям"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {registration && (
                        <InputArea
                            {...registration}
                            collapsed={isDone}
                            setData={setRegistration as LoadedState}
                        />
                    )}
                    {disability && (
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} />
                    )}
                    {additionally && (
                        <InputArea {...additionally} collapsed={isDone} setData={setAdditionally as LoadedState} />
                    )}
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                currentFormId,
                                [form, registration, disability, additionally],
                                setLoading,
                                setCompleted,
                            )
                        }
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

export default RegularAccommodationPage
