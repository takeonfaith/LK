import { APPLICATIONS_ROUTE } from '@app/routes/routes'
import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory } from 'react-router'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { applicationsModel } from '@entities/applications'
import globalAppSendForm from "@pages/applications/lib/global-app-send-form";
import { ApplicationFormCodes } from "@utility-types/application-form-codes";

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ApplicationForSocialScrollarship = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    const history = useHistory()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <Button
                        text="Назад к цифровым сервисам"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(ApplicationFormCodes.PR_SOCSTIP, [form], setLoading, setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && !!form?.documents?.files.length}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default ApplicationForSocialScrollarship
