import { Button, FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import { globalAppSendForm } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const AcademicLeaveAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    const history = useHistory()

    const isForm = !!form

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    if (!isForm) {
        return null
    }

    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: form, setDataForm: setForm as LoadedState }],
        [{ dataForm: kvdCert, setDataForm: setKvdCert as LoadedState }],
        [{ dataForm: fluorographyCert, setDataForm: setFluorographyCert as LoadedState }],
        [{ dataForm: vichRwCert, setDataForm: setVichRwCert as LoadedState }],
        [{ dataForm: graftCert, setDataForm: setGraftCert as LoadedState }],
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
                    Предоставление права проживания в период академического отпуска
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={'Отправить'}
                    action={() =>
                        globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_AO,
                            [form, kvdCert, fluorographyCert, vichRwCert, graftCert] as IInputArea[],
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
                        checkFormFields(fluorographyCert) &&
                        checkFormFields(vichRwCert) &&
                        checkFormFields(graftCert) &&
                        checkFormFields(kvdCert) &&
                        (form.optionalCheckbox?.value ?? true)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default AcademicLeaveAccommodationPage
