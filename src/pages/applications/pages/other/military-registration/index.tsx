import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { Divider, FormBlock, SubmitButton } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/atoms/checkbox'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import {
    getDriversLicenseData,
    getFamilyCompositionForm,
    getGeneralData,
    getMaritalStatusForm,
    getMilitaryRegistrationDataForm,
    getMilitaryRegistrationDocument,
} from './lib/main-form'
import { applicationsModel } from '@entities/applications'
import { LoadedState } from 'widgets/template-form'

const MilitaryRegistration = () => {
    const [generalData, setGeneralData] = useState<IInputArea | null>(null)
    const [maritalStatus, setMaritalStatus] = useState<IInputArea | null>(null)
    const [familyComposition, setFamilyComposition] = useState<IInputArea | null>(null)
    const [militaryRegistrationData, setMilitaryRegistrationData] = useState<IInputArea | null>(null)
    const [militaryRegistrationDocument, setMilitaryRegistrationDocument] = useState<IInputArea | null>(null)
    const [driversLicenseData, setDriversLicenseData] = useState<IInputArea | null>(null)
    const [confirmed, setConfirmed] = useState<boolean>(false)
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

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

    return (
        <BaseApplicationWrapper isDone={false}>
            <FormBlock>
                {!!generalData && !!setGeneralData && (
                    <InputArea {...generalData} setData={setGeneralData as LoadedState} />
                )}
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
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={() => {}}
                    isLoading={false}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={false}
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default MilitaryRegistration
