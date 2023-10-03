import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Title } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
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
import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'
import { LoadedState } from 'widgets/template-form'

const MilitaryRegistration = () => {
    const [generalData, setGeneralData] = useState<IInputArea | null>(null)
    const [maritalStatus, setMaritalStatus] = useState<IInputArea>(getMaritalStatusForm())
    const [familyComposition, setFamilyComposition] = useState<IInputArea>(getFamilyCompositionForm())
    const [militaryRegistrationData, setMilitaryRegistrationData] = useState<IInputArea>(
        getMilitaryRegistrationDataForm(),
    )
    const [militaryRegistrationDocument, setMilitaryRegistrationDocument] = useState<IInputArea>(
        getMilitaryRegistrationDocument(),
    )
    const [driversLicenseData, setDriversLicenseData] = useState<IInputArea>(getDriversLicenseData(null))

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

    const driversLicenseEmpty = useMemo(() => {
        return ((driversLicenseData?.data[0] as IInputAreaData)?.value as SelectPage)?.id !== 0
    }, [(driversLicenseData?.data[0] as IInputAreaData)?.value])

    useEffect(() => {
        if (driversLicenseData)
            setDriversLicenseData(getDriversLicenseData(driversLicenseData.data as IInputAreaData[]))
    }, [driversLicenseEmpty])

    if (!generalData) return null

    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: generalData, setDataForm: setGeneralData as LoadedState }],
        [{ dataForm: maritalStatus, setDataForm: setMaritalStatus as LoadedState }],
        [{ dataForm: familyComposition, setDataForm: setFamilyComposition as LoadedState }],
        [{ dataForm: militaryRegistrationData, setDataForm: setMilitaryRegistrationData as LoadedState }],
        [{ dataForm: militaryRegistrationDocument, setDataForm: setMilitaryRegistrationDocument as LoadedState }],
        [{ dataForm: driversLicenseData, setDataForm: setDriversLicenseData as LoadedState }],
    ]

    return (
        <BaseApplicationWrapper isDone={false}>
            <FormBlock>
                <Title size={3} align="left">
                    Воинский учет
                </Title>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <Checkbox
                    checked={confirmed}
                    setChecked={setConfirmed}
                    text={'Я подтверждаю подлинность предоставленных документов'}
                />
                <SubmitButton
                    text={!completed ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        return globalAppSendForm(
                            ApplicationFormCodes.MIL_REG,
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
