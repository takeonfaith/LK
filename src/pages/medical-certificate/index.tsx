import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'

const MedicalCertificate = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        setForm({
            title: 'Загрузите медицинскую справку',
            data: [
                {
                    title: 'ФИО',
                    type: 'text',
                    fieldName: 'name',
                    required: true,
                    value:
                        dataUserApplication?.surname +
                        ' ' +
                        dataUserApplication?.name +
                        ' ' +
                        dataUserApplication?.patronymic,
                },
                {
                    title: 'Телефон',
                    type: 'tel',
                    mask: true,
                    fieldName: 'phone',
                    editable: true,
                    required: true,
                    value: dataUserApplication?.phone ?? '',
                },

                {
                    title: 'Email',
                    type: 'email',
                    fieldName: 'email',
                    value: dataUserApplication?.email ?? '',
                    editable: true,
                    required: true,
                },
            ],
            documents: { files: [], fieldName: 'docs', required: true, maxFiles: 1 },
        })
    }, [])
    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                {form && setForm && <InputArea {...form} setData={setForm as any} />}
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={() => {}}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default MedicalCertificate
