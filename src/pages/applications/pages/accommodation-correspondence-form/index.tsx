import { userModel } from '@entities/user'
import getDisability from '@pages/applications/pages/regular-accommodation/lib/get-disability'
import { APPLICATIONS_ROUTE } from '@routes'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import { useHistory } from 'react-router'
import { BaseApplicationWrapper } from '@pages/applications/ui/base-application-wrapper'
import { FiChevronLeft } from 'react-icons/fi'
import getRegistration from '@pages/applications/pages/accommodation-correspondence-form/lib/get-registration'
import getAdditionally from '@pages/applications/pages/accommodation-correspondence-form/lib/get-additionally'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const AccommodationCorrespondenceFormPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
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
                    {registration && (
                        <InputArea {...registration} collapsed={isDone} setData={setRegistration as LoadedState} />
                    )}
                    {disability && (
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} />
                    )}
                    {additionally && (
                        <InputArea {...additionally} collapsed={isDone} setData={setAdditionally as LoadedState} />
                    )}
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

export default AccommodationCorrespondenceFormPage
