import { HR_APPLICATIONS_ROUTE } from '@app/routes/teacher-routes'
import { applicationsModel } from '@entities/applications'
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormWorkTransfer from '@pages/hr-applications/lib/send-hr-form-work-transfer'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory, useParams } from 'react-router'
import { bufferWorkTransferModel } from '../buffer-work-transfer/model'
import getForm from './lib/get-form'
import getPostAfterTransfer from './lib/get-post-after-transfer'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const WorkTransfer = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferWorkTransferModel.selectors.useBufferWorkTransfer()
    const [completed, setCompleted] = useState(false)
    const [partTimeType, setPartTimeType] = useState<any | null>(null)
    const [employment, setEmployment] = useState<any | null>(null)
    const [newPost, setNewPost] = useState<string | null>(null)
    const [newPlaceOfWork, setNewPlaceOfWork] = useState<string | null>(null)
    const [newRate, setNewRate] = useState<any>(null)
    const [transferDate, setTransferDate] = useState<string | null>(null)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const isDone = completed ?? false
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const currentIndex = +id
    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getPostAfterTransfer(form.data as IInputAreaData[]))
        }
    }, [form])

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    dataWorkerApplication,
                    currentIndex,
                    employment,
                    setEmployment,
                    newPost,
                    setNewPost,
                    newPlaceOfWork,
                    setNewPlaceOfWork,
                    newRate,
                    setNewRate,
                    transferDate,
                    setTransferDate,
                    partTimeType,
                    setPartTimeType,
                ),
            )
        }
    }, [
        dataUserApplication,
        currentIndex,
        loading,
        employment,
        newPost,
        newPlaceOfWork,
        newRate,
        transferDate,
        partTimeType,
    ])
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
                        specialFieldsNameConfig={specialFieldsName}
                    />

                    <SubmitButton
                        text={'Отправить'}
                        action={() => SendHrFormWorkTransfer(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted)}
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

export default WorkTransfer

/*<TemplateFormPage model={teacherStatementModel} 
            getForm={getForm(dataUserApplication)} 
            goBack="Назад к цифровым сервисам" />*/
