import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { globalAppSendForm } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import getMethodObtaining from '@features/applications/lib/get-method-obstaing'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const StateAccreditation = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getMethodObtaining(form.data as IInputAreaData[]))
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
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(ApplicationFormCodes.OKID_LICAKKRED, [form], setLoading, setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form, specialFieldsName)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default StateAccreditation
