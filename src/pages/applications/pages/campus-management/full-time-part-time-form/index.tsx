import { applicationsModel } from '@entities/applications'
import { userModel } from '@entities/user'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'
import { getAdditionally, getDisability, getRegistration, globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { Error, FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const FullTimePartTimeFormPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    if (user?.educationForm !== 'Недоступен') {
        return <Error text={'Сервис временно недоступен в связи с отсутствием свободных мест'} />
    }
    const isForm = !!form && !!registration && !!disability && !!additionally

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setDisability(getDisability())
            setRegistration(getRegistration())
            setAdditionally(getAdditionally())
        }
    }, [dataUserApplication])

    if (!isForm) {
        return null
    }

    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: form, setDataForm: setForm as LoadedState }],
        [{ dataForm: registration, setDataForm: setRegistration as LoadedState }],
        [{ dataForm: kvdCert, setDataForm: setKvdCert as LoadedState }],
        [{ dataForm: fluorographyCert, setDataForm: setFluorographyCert as LoadedState }],
        [{ dataForm: vichRwCert, setDataForm: setVichRwCert as LoadedState }],
        [{ dataForm: graftCert, setDataForm: setGraftCert as LoadedState }],
    ]

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                <Title size={4} align="left">
                    Предоставление права проживания (очно-заочная форма)
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={'Отправить'}
                    action={() =>
                        globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_OOZ,
                            [
                                form,
                                registration,
                                disability,
                                additionally,
                                kvdCert,
                                fluorographyCert,
                                vichRwCert,
                                graftCert,
                            ] as IInputArea[],
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
                    isActive={
                        (form.optionalCheckbox?.value ?? true) &&
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
        </BaseApplicationWrapper>
    )
}

export default FullTimePartTimeFormPage
