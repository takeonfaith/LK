import { Button, Error, FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import { useHistory } from 'react-router'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { userModel } from '@entities/user'
import { getAdditionally, getRegistration, getDisability, globalAppSendForm } from '@pages/applications/lib'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const AccommodationCorrespondenceFormPage = () => {
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
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const history = useHistory()

    const isForm = !!form && !!registration && !!disability && !!additionally

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
        [{ dataForm: additionally, setDataForm: setAdditionally as LoadedState }],
    ]

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                <Button
                    text="Назад к цифровым сервисам"
                    icon={<FiChevronLeft />}
                    onClick={() => history.push(APPLICATIONS_ROUTE)}
                    background="transparent"
                    textColor="var(--blue)"
                />
                <Title size={4} align="left">
                    Предоставление права проживания (заочная форма)
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={'Отправить'}
                    action={() =>
                        globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_Z,
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
                        checkFormFields(form) &&
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

export default AccommodationCorrespondenceFormPage
