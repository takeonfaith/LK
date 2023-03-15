import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import getFamily from './lib/get-family'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { getAdditionally, globalAppSendForm } from '@pages/applications/lib'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import getBirthCertificate from '@pages/applications/pages/campus-management/family-room/lib/get-birth-certificate'
import getConsentToProcessingPersonalData from '@pages/applications/pages/campus-management/family-room/lib/get-consent-to-processing-personal-data'
import getMarriageRegistrationCertificate from '@pages/applications/pages/campus-management/family-room/lib/get-marriage-registration-certificate'
import getRegistrationDoc from '@pages/applications/pages/campus-management/family-room/lib/get-registration-doc'
import getRegistrationFamilyMembers from '@pages/applications/pages/campus-management/family-room/lib/get-registration-family-members'

const FamilyRoomPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const [birthCertificate, setBirthCertificate] = useState<IInputArea | null>(null)
    const [consentToProcessingPersonalData, setConsentToProcessingPersonalData] = useState<IInputArea | null>(null)
    const [marriageRegistrationCertificate, setMarriageRegistrationCertificate] = useState<IInputArea | null>(null)
    const [registrationDoc, setRegistrationDoc] = useState<IInputArea | null>(null)
    const [registrationFamilyMembers, setRegistrationFamilyMembers] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const history = useHistory()

    const [kvdCert, setKvdCert] = useState<IInputArea | null>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea | null>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea | null>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea | null>(listConfigCert.graftCert)

    useEffect(() => {
        if (!!dataUserApplication) {
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

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!family && !!additionally && (
                <FormBlock>
                    <Button
                        text="Назад к цифровым сервисам"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm} />
                    {family && <InputArea {...family} collapsed={isDone} setData={setFamily} />}
                    {kvdCert && setKvdCert && <InputArea {...kvdCert} setData={setKvdCert} />}
                    {fluorographyCert && setFluorographyCert && (
                        <InputArea {...fluorographyCert} setData={setFluorographyCert} />
                    )}
                    {vichRwCert && setVichRwCert && <InputArea {...vichRwCert} setData={setVichRwCert} />}
                    {graftCert && setGraftCert && <InputArea {...graftCert} setData={setGraftCert} />}
                    {additionally && <InputArea {...additionally} collapsed={isDone} setData={setAdditionally} />}
                    {birthCertificate && (
                        <InputArea {...birthCertificate} collapsed={isDone} setData={setBirthCertificate} />
                    )}
                    {consentToProcessingPersonalData && (
                        <InputArea
                            {...consentToProcessingPersonalData}
                            collapsed={isDone}
                            setData={setConsentToProcessingPersonalData}
                        />
                    )}
                    {marriageRegistrationCertificate && (
                        <InputArea
                            {...marriageRegistrationCertificate}
                            collapsed={isDone}
                            setData={setMarriageRegistrationCertificate}
                        />
                    )}
                    {registrationDoc && (
                        <InputArea {...registrationDoc} collapsed={isDone} setData={setRegistrationDoc} />
                    )}
                    {registrationFamilyMembers && (
                        <InputArea
                            {...registrationFamilyMembers}
                            collapsed={isDone}
                            setData={setRegistrationFamilyMembers}
                        />
                    )}
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.USG_GETHOSTEL_FAMILY,
                                [
                                    form,
                                    family,
                                    additionally,
                                    kvdCert,
                                    fluorographyCert,
                                    vichRwCert,
                                    graftCert,
                                    birthCertificate,
                                    consentToProcessingPersonalData,
                                    marriageRegistrationCertificate,
                                    registrationDoc,
                                    registrationFamilyMembers,
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
                            !!family?.data.length &&
                            !!fluorographyCert &&
                            !!vichRwCert &&
                            !!graftCert &&
                            !!kvdCert &&
                            !!consentToProcessingPersonalData &&
                            !!marriageRegistrationCertificate &&
                            !!registrationDoc &&
                            !!registrationFamilyMembers &&
                            checkFormFields(form) &&
                            checkFormFields(fluorographyCert) &&
                            checkFormFields(vichRwCert) &&
                            checkFormFields(graftCert) &&
                            checkFormFields(kvdCert) &&
                            checkFormFields(consentToProcessingPersonalData) &&
                            checkFormFields(marriageRegistrationCertificate) &&
                            checkFormFields(registrationDoc) &&
                            checkFormFields(registrationFamilyMembers)
                        }
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default FamilyRoomPage
