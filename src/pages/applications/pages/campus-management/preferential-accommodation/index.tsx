import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { globalAppSendForm, getRegistration, getDisability } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PreferentialAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setDisability(getDisability())
            setRegistration(getRegistration())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!registration && !!disability && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {disability && (
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} />
                    )}
                    {registration && (
                        <InputArea {...registration} collapsed={isDone} setData={setRegistration as LoadedState} />
                    )}
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.USG_GETHOSTEL_BENEFIT,
                                [form, registration, disability],
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
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PreferentialAccommodationPage
