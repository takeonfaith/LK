import React, { useEffect, useState } from 'react'
import InputArea from '@ui/input-area'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import { useHistory } from 'react-router'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { FiChevronLeft } from 'react-icons/fi'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import checkFormFields from '@utils/check-form-fields'
import { HR_APPLICATIONS_ROUTE } from '@app/routes/teachers-routes'
import globalAppSendForm from '@pages/applications/lib/global-app-send-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ExtraHolidayColl = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const history = useHistory()

    useEffect(() => {
        if (!!dataUserApplication)     setForm(getForm(dataUserApplication))
            
       
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm  && (
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
                            globalAppSendForm(
                                ApplicationFormCodes.DISMISSAL,
                                [form],
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
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    
    )
}

export default ExtraHolidayColl


/*<TemplateFormPage model={teacherStatementModel} 
            getForm={getForm(dataUserApplication)} 
            goBack="Назад к цифровым сервисам" />*/