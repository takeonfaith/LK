import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { Divider, FormBlock, SubmitButton } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/atoms/checkbox'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import React, { useEffect, useMemo, useState } from 'react'
import {
    getDriversLicenseData,
    getFamilyCompositionForm,
    getGeneralData,
    getMaritalStatusForm,
    getMilitaryRegistrationDataForm,
    getMilitaryRegistrationDocument,
} from './lib/main-form'
import { applicationsModel } from '@entities/applications'
import { SelectPage } from '@features/select'
import { globalAppSendForm } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import checkFormFields from '@shared/lib/check-form-fields'

const MilitaryRegistration = () => {
    const [generalData, setGeneralData] = useState<IInputArea | null>(null)
    const [maritalStatus, setMaritalStatus] = useState<IInputArea | null>(null)
    const [familyComposition, setFamilyComposition] = useState<IInputArea | null>(null)
    const [militaryRegistrationData, setMilitaryRegistrationData] = useState<IInputArea | null>(null)
    const [militaryRegistrationDocument, setMilitaryRegistrationDocument] = useState<IInputArea | null>(null)
    const [driversLicenseData, setDriversLicenseData] = useState<IInputArea | null>(null)

    const [confirmed, setConfirmed] = useState<boolean>(false)
    const [completed, setCompleted] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setGeneralData(getGeneralData(dataUserApplication))
        }
    }, [dataUserApplication])

    useEffect(() => {
        setMaritalStatus(getMaritalStatusForm())
        setFamilyComposition(getFamilyCompositionForm())
        setMilitaryRegistrationData(getMilitaryRegistrationDataForm())
        setMilitaryRegistrationDocument(getMilitaryRegistrationDocument())
        setDriversLicenseData(getDriversLicenseData(null))
    }, [])

    const driversLicenseEmpty = useMemo(() => {
        return ((driversLicenseData?.data[0] as IInputAreaData)?.value as SelectPage)?.id !== 0
    }, [(driversLicenseData?.data[0] as IInputAreaData)?.value])

    useEffect(() => {
        if (driversLicenseData)
            setDriversLicenseData(getDriversLicenseData(driversLicenseData.data as IInputAreaData[]))
    }, [driversLicenseEmpty])
    return (
        <BaseApplicationWrapper isDone={false}>
            <FormBlock>
                {!!generalData && !!setGeneralData && <InputArea {...generalData} setData={setGeneralData} />}
                <Divider />
                {!!maritalStatus && !!setMaritalStatus && <InputArea {...maritalStatus} setData={setMaritalStatus} />}
                <Divider />
                {!!familyComposition && !!setFamilyComposition && (
                    <InputArea {...familyComposition} setData={setFamilyComposition} />
                )}
                <Divider />
                {!!militaryRegistrationData && !!setMilitaryRegistrationData && (
                    <InputArea {...militaryRegistrationData} setData={setMilitaryRegistrationData} />
                )}
                <Divider />
                {!!militaryRegistrationDocument && !!setMilitaryRegistrationDocument && (
                    <InputArea {...militaryRegistrationDocument} setData={setMilitaryRegistrationDocument} />
                )}
                <Divider />
                {!!driversLicenseData && !!setDriversLicenseData && (
                    <InputArea {...driversLicenseData} setData={setDriversLicenseData} />
                )}
                <Divider />
                <Checkbox
                    checked={confirmed}
                    setChecked={setConfirmed}
                    text={'Я подтверждаю подлинность предоставленных документов'}
                />
                <SubmitButton
                    text={!completed ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        globalAppSendForm(
                            ApplicationFormCodes.MILITARY_REG,
                            [
                                generalData,
                                maritalStatus,
                                familyComposition,
                                militaryRegistrationData,
                                militaryRegistrationDocument,
                                driversLicenseData,
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
                    isDone={completed}
                    isActive={
                        !!confirmed &&
                        !!generalData &&
                        !!maritalStatus &&
                        !!militaryRegistrationData &&
                        !!militaryRegistrationDocument &&
                        !!driversLicenseData &&
                        !!familyComposition &&
                        checkFormFields(generalData) &&
                        checkFormFields(maritalStatus) &&
                        checkFormFields(militaryRegistrationData) &&
                        checkFormFields(militaryRegistrationDocument) &&
                        checkFormFields(driversLicenseData) &&
                        checkFormFields(familyComposition)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default MilitaryRegistration
