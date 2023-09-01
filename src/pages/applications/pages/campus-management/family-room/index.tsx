import { FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import getFamily from './lib/get-family'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { getAdditionally, globalAppSendForm } from '@pages/applications/lib'
import getBirthCertificate from '@pages/applications/pages/campus-management/family-room/lib/get-birth-certificate'
import getConsentToProcessingPersonalData from '@pages/applications/pages/campus-management/family-room/lib/get-consent-to-processing-personal-data'
import getMarriageRegistrationCertificate from '@pages/applications/pages/campus-management/family-room/lib/get-marriage-registration-certificate'
import getRegistrationDoc from '@pages/applications/pages/campus-management/family-room/lib/get-registration-doc'
import getRegistrationFamilyMembers from '@pages/applications/pages/campus-management/family-room/lib/get-registration-family-members'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const FamilyRoomPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)
    const [birthCertificate, setBirthCertificate] = useState<IInputArea | null>(null)
    const [consentToProcessingPersonalData, setConsentToProcessingPersonalData] = useState<IInputArea | null>(null)
    const [marriageRegistrationCertificate, setMarriageRegistrationCertificate] = useState<IInputArea | null>(null)
    const [registrationDoc, setRegistrationDoc] = useState<IInputArea | null>(null)
    const [registrationFamilyMembers, setRegistrationFamilyMembers] = useState<IInputArea | null>(null)

    const isForm =
        !!form &&
        !!family &&
        !!additionally &&
        !!birthCertificate &&
        !!consentToProcessingPersonalData &&
        !!marriageRegistrationCertificate &&
        !!registrationDoc &&
        !!registrationFamilyMembers

    useEffect(() => {
        if (dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setFamily(getFamily())
            setAdditionally(getAdditionally())
            setBirthCertificate(getBirthCertificate())
            setConsentToProcessingPersonalData(getConsentToProcessingPersonalData())
            setMarriageRegistrationCertificate(getMarriageRegistrationCertificate())
            setRegistrationDoc(getRegistrationDoc())
            setRegistrationFamilyMembers(getRegistrationFamilyMembers())
        }
    }, [dataUserApplication])

    if (!isForm) {
        return null
    }
    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: form, setDataForm: setForm as LoadedState }],
        [{ dataForm: family, setDataForm: setFamily as LoadedState }],
        [{ dataForm: kvdCert, setDataForm: setKvdCert as LoadedState }],
        [{ dataForm: fluorographyCert, setDataForm: setFluorographyCert as LoadedState }],
        [{ dataForm: vichRwCert, setDataForm: setVichRwCert as LoadedState }],
        [{ dataForm: graftCert, setDataForm: setGraftCert as LoadedState }],
        [
            { dataForm: birthCertificate, setDataForm: setBirthCertificate as LoadedState },
            {
                dataForm: consentToProcessingPersonalData,
                setDataForm: setConsentToProcessingPersonalData as LoadedState,
            },
            {
                dataForm: marriageRegistrationCertificate,
                setDataForm: setMarriageRegistrationCertificate as LoadedState,
            },
            { dataForm: registrationDoc, setDataForm: setRegistrationDoc as LoadedState },
            { dataForm: registrationFamilyMembers, setDataForm: setRegistrationFamilyMembers as LoadedState },
        ],
    ]

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                <Title size={4} align="left">
                    Предоставление права проживания в семейной комнате
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={'Отправить'}
                    action={() => {
                        return globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_FAMILY,
                            [
                                form,
                                family,
                                kvdCert,
                                fluorographyCert,
                                vichRwCert,
                                graftCert,
                                birthCertificate,
                                consentToProcessingPersonalData,
                                marriageRegistrationCertificate,
                                registrationDoc,
                            ] as IInputArea[],
                            setLoading,
                            setCompleted,
                        )
                    }}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={
                        (form.optionalCheckbox?.value ?? true) &&
                        checkFormFields(form) &&
                        checkFormFields(family) &&
                        checkFormFields(kvdCert) &&
                        checkFormFields(fluorographyCert) &&
                        checkFormFields(vichRwCert) &&
                        checkFormFields(graftCert) &&
                        checkFormFields(consentToProcessingPersonalData) &&
                        checkFormFields(marriageRegistrationCertificate) &&
                        checkFormFields(registrationDoc) &&
                        checkFormFields(registrationFamilyMembers)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default FamilyRoomPage
