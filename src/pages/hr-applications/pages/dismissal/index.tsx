import React from 'react'
import { applicationsModel } from '@entities/applications'
import { specialFieldsNameConfigT } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { getCurrentIndex } from '@pages/hr-applications/lib/currentIndex'
import SendHrFormDismissal from '@pages/hr-applications/lib/send-hr-form-dismissal'
import InputArea from '@shared/ui/input-area'
import { FormBlock, SubmitButton } from '@ui/atoms'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import { useEffect, useState } from 'react'
import getAddress from './lib/get-address'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const Dismissal = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<specialFieldsNameConfigT>({})
    const isDone = completed ?? false
    const currentIndex = getCurrentIndex()
    //const [currentIndex, setCurrentIndex] = useState<number>(0)
    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication) {
            setForm(getForm(dataUserApplication, dataWorkerApplication, currentIndex))
        }
    }, [dataUserApplication, currentIndex])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getAddress(form.data as IInputAreaData[]))
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
                        specialFieldsName={specialFieldsName}
                    />

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            SendHrFormDismissal(ApplicationFormCodes.DISMISSAL, [form], setLoading, setCompleted)
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

export default Dismissal

/*<TemplateFormPage model={teacherStatementModel}
            getForm={getForm(dataUserApplication)}
            goBack="Назад к цифровым сервисам" />*/
