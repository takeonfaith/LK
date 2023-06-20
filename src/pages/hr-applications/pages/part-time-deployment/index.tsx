import { applicationsModel } from '@entities/applications'
import globalAppSendForm from '@pages/applications/lib/global-app-send-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getEmployment from './lib/get-employment'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PartTimeEmployment = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [employment, setEmployment] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setEmployment(getEmployment())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!employment && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {employment && (
                        <InputArea {...employment} collapsed={isDone} setData={setEmployment as LoadedState} />
                    )}

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.PART_TIME_EMPLOYMENT,
                                [form, employment],
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

export default PartTimeEmployment

/*<TemplateFormPage model={teacherStatementModel}
            getForm={getForm(dataUserApplication)}
            goBack="Назад к цифровым сервисам" />*/
