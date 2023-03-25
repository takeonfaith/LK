import { HR_APPLICATIONS_ROUTE } from '@app/routes/teacher-routes'
import { applicationsModel } from '@entities/applications'
import { specialFieldsNameT } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormMedicalExamination from '@pages/hr-applications/lib/send-hr-form-medical-examination'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory, useParams } from 'react-router'
import { bufferMedicalExaminationModel } from '../buffer-medical-examination/model'
import getCompensation from './lib/get-compenstion'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const MedicalExamination = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const birthday = dataUserApplication
    const { loading: loading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const [completed, setCompleted] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<specialFieldsNameT>(null)
    const isDone = completed ?? false
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const currentIndex = +id
    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(getForm(dataUserApplication, dataWorkerApplication, currentIndex))
        }
    }, [dataUserApplication, currentIndex, loading])
    useEffect(() => {
        if (!!form && !!dataUserApplication && !!birthday) {
            setSpecialFieldsName(getCompensation(form.data as IInputAreaData[], birthday as unknown as string))
        }
    }, [form])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <Button
                        text="Назад к кадровым заявлениям"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(HR_APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm as LoadedState}
                        specialFieldsName={specialFieldsName}
                    />

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            SendHrFormMedicalExamination(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default MedicalExamination

/*<TemplateFormPage model={teacherStatementModel} 
            getForm={getForm(dataUserApplication)} 
            goBack="Назад к цифровым сервисам" />*/
