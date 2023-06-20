import { applicationsModel } from '@entities/applications'
import globalAppSendForm from '@pages/applications/lib/global-app-send-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import getNewPost from './lib/get-new-post'
import getOldPost from './lib/get-old-post'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const WorkTransfer = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [oldPost, setOldPost] = useState<IInputArea | null>(null)
    const [newPost, setNewPost] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setOldPost(getOldPost())
            setNewPost(getNewPost())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!oldPost && !!newPost && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {oldPost && <InputArea {...oldPost} collapsed={isDone} setData={setOldPost as LoadedState} />}
                    {newPost && <InputArea {...newPost} collapsed={isDone} setData={setNewPost as LoadedState} />}

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.DISMISSAL,
                                [form, oldPost, newPost],
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

export default WorkTransfer

/*<TemplateFormPage model={teacherStatementModel}
            getForm={getForm(dataUserApplication)}
            goBack="Назад к цифровым сервисам" />*/
