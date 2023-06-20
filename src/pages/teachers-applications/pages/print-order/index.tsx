import React, { useEffect, useState } from 'react'
import { getOrderParamsForm, getForm, getAnnotationForm } from './lib/get-form'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import InputArea from '@ui/input-area'
import { globalAppSendForm } from '@pages/applications/lib'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { applicationsModel } from '@entities/applications'

const PrintOrderPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [orderParamsForm, setOrderParamsForm] = useState<IInputArea | null>(null)
    const [annotationForm, setAnnotationForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const history = useHistory()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setOrderParamsForm(getOrderParamsForm())
            setAnnotationForm(getAnnotationForm())
        }
    }, [dataUserApplication])

    return (
        // <TemplateFormPage
        //     model={teacherStatementModel}
        //     getForm={getForm}
        //     goBack="Назад к цифровым сервисам"
        //     isSpecialField={true}
        //     formId={ApplicationTeachersFormCodes.ISSUANCE_OF_LICENSES}
        // />

        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!orderParamsForm && !!annotationForm && (
                <FormBlock>
                    <Button
                        text="Назад к цифровым сервисам"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm} />
                    <InputArea {...orderParamsForm} collapsed={isDone} setData={setOrderParamsForm} />
                    <InputArea {...annotationForm} collapsed={isDone} setData={setAnnotationForm} />
                    <SubmitButton
                        text="Отправить"
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.PRINT_ORDER,
                                [form, orderParamsForm, annotationForm] as IInputArea[],
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
                        isActive={!!orderParamsForm?.data.length && checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PrintOrderPage
