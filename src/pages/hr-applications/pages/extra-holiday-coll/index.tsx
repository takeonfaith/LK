import React, { useEffect, useState } from 'react'
import InputArea from '@ui/input-area'
import { FormBlock, SubmitButton } from '@ui/atoms'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import getForm from './lib/get-form'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import checkFormFields from '@utils/check-form-fields'
import globalAppSendForm from '@pages/applications/lib/global-app-send-form'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import getExtraHolidayLength from './lib/get-extra-holiday-length'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ExtraHolidayColl = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication) setForm(getForm(dataUserApplication))
    }, [dataUserApplication])
    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getExtraHolidayLength(form.data as IInputAreaData[]))
        }
    }, [form])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm as LoadedState}
                        specialFieldsNameConfig={specialFieldsName}
                    />

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(ApplicationFormCodes.DISMISSAL, [form], setLoading, setCompleted)
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
