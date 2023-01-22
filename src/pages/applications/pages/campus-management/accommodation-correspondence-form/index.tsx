import { Error, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { userModel } from '@entities/user'
import { getAdditionally, getRegistration, getDisability, globalAppSendForm } from '@pages/applications/lib'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const AccommodationCorrespondenceFormPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    if (user?.educationForm !== 'Недоступен') {
        return <Error text={'Сервис временно недоступен в связи с отсутствием свободных мест'} />
    }

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setDisability(getDisability())
            setRegistration(getRegistration())
            setAdditionally(getAdditionally())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!registration && !!disability && !!additionally && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {registration && (
                        <InputArea {...registration} collapsed={isDone} setData={setRegistration as LoadedState} />
                    )}
                    {additionally && (
                        <InputArea {...additionally} collapsed={isDone} setData={setAdditionally as LoadedState} />
                    )}
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.USG_GETHOSTEL_Z,
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

export default AccommodationCorrespondenceFormPage
