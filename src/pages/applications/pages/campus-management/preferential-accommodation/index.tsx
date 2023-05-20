import { applicationsModel } from '@entities/applications'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm from '@features/applications/ui/molecules/step-by-step-form'
import { getDisability, getRegistration, globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PreferentialAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)
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
                    <Title size={4} align="left">
                        Предоставление права проживания льготной категории граждан
                    </Title>
                    <StepByStepForm
                        stagesConfig={[
                            [{ dataForm: form, setDataForm: setForm as LoadedState }],
                            [{ dataForm: disability, setDataForm: setDisability as LoadedState }],
                            [{ dataForm: registration, setDataForm: setRegistration as LoadedState }],
                            [
                                { dataForm: kvdCert, setDataForm: setKvdCert },
                                { dataForm: fluorographyCert, setDataForm: setFluorographyCert },
                                { dataForm: vichRwCert, setDataForm: setVichRwCert },
                                { dataForm: graftCert, setDataForm: setGraftCert },
                            ],
                        ]}
                    />
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
