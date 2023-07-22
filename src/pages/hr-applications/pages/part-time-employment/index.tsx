import { HR_APPLICATIONS_ROUTE } from '@app/routes/teacher-routes'
import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormPartTimeEmployment from '@pages/hr-applications/lib/send-hr-form-holiday-work'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory, useParams } from 'react-router'
import { bufferPartTimeEmploymentModel } from '../buffer-part-time-employment/model'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PartTimeEmployment = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferPartTimeEmploymentModel.selectors.useBufferPartTimeEmployment()
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false
    const history = useHistory()

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(getForm(dataUserApplication, dataWorkerApplication))
        }
    }, [dataUserApplication, loading])

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
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            SendHrFormPartTimeEmployment(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PartTimeEmployment

/*<TemplateFormPage model={teacherStatementModel} 
            getForm={getForm(dataUserApplication)} 
            goBack="Назад к цифровым сервисам" />*/
