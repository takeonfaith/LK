import React from 'react'
import { HR_APPLICATIONS_ROUTE } from '@app/routes/teacher-routes'
import { applicationsModel } from '@entities/applications'
import { specialFieldsNameT } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormDismissal from '@pages/hr-applications/lib/send-hr-form-dismissal'
import InputArea from '@shared/ui/input-area'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory, useParams } from 'react-router'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const Dismissal = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
        workerLoading: loading,
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [getTk, setGetTk] = useState<any | null>(null)
    const [isRetirement, setIsRetirement] = useState<boolean>(false)
    const [getTkAddress, setGetTkAddress] = useState<string | null>(null)
    const [reason, setReason] = useState<string | null>('По собственному желанию')
    const [lastDay, setLastDay] = useState<string | null>(null)
    const isDone = completed ?? false
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const currentIndex = +id
    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    dataWorkerApplication,
                    currentIndex,
                    getTk,
                    setGetTk,
                    getTkAddress,
                    setGetTkAddress,
                    isRetirement,
                    setIsRetirement,
                    reason,
                    setReason,
                    lastDay,
                    setLastDay,
                ),
            )
        }
    }, [dataUserApplication, currentIndex, loading, getTk, getTkAddress, isRetirement, reason, lastDay])

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
                        action={() => sendHrFormDismissal(ApplicationFormCodes.DISMISSAL, [form], setCompleted)}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                        // popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        // popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default Dismissal
