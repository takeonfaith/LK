import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormHolidayTransfer from '@pages/hr-applications/lib/send-hr-form-holiday-transfer'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { bufferHolidayTransferModel } from '../buffer-holiday-transfer/model'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const HolidayTransfer = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferHolidayTransferModel.selectors.useBufferHolidayTransfer()
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false
    const { id } = useParams<{ id: string }>()
    const currentIndex = +id

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(getForm(dataUserApplication, dataWorkerApplication, currentIndex))
        }
    }, [dataUserApplication, currentIndex, loading])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={'Отправить'}
                        action={() => sendHrFormHolidayTransfer(ApplicationFormCodes.DISMISSAL, [form], setCompleted)}
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

export default HolidayTransfer
