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
import { globalAppSendForm, getRegistration, getDisability } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm from '@features/applications/ui/molecules/step-by-step-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PreferentialAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)
    const history = useHistory()
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

    const sendForm = () =>
        globalAppSendForm(
            ApplicationFormCodes.USG_GETHOSTEL_BENEFIT,
            [form, registration, disability, kvdCert, fluorographyCert, vichRwCert, graftCert] as IInputArea[],
            setLoading,
            setCompleted,
        )

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!registration && !!disability && (
                <FormBlock>
                    <Button
                        text="Назад к цифровым сервисам"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <StepByStepForm>
                        <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} />
                        <InputArea {...registration} collapsed={isDone} setData={setRegistration as LoadedState} />
                        <InputArea {...kvdCert} setData={setKvdCert} />
                        <InputArea {...fluorographyCert} setData={setFluorographyCert} />
                        <InputArea {...vichRwCert} setData={setVichRwCert} />
                        <InputArea {...graftCert} setData={setGraftCert} />
                    </StepByStepForm>
                    <SubmitButton
                        text={'Отправить'}
                        action={() => sendForm()}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={
                            !!fluorographyCert &&
                            !!vichRwCert &&
                            !!graftCert &&
                            !!kvdCert &&
                            checkFormFields(form) &&
                            checkFormFields(fluorographyCert) &&
                            checkFormFields(vichRwCert) &&
                            checkFormFields(graftCert) &&
                            checkFormFields(kvdCert)
                        }
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PreferentialAccommodationPage
