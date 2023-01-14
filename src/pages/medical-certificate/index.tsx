import { applicationsModel } from '@entities/applications'
import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { getCertForm } from './lib/cert-form'
import { getForm } from './lib/main-form'

const MedicalCertificate = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [kvdCert, setKvdCert] = useState<IInputArea | null>(null)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea | null>(null)
    const [vichRwCert, setVichRwCert] = useState<IInputArea | null>(null)
    const [graftCert, setGraftCert] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        dataUserApplication && setForm(getForm(dataUserApplication))
    }, [dataUserApplication])

    useEffect(() => {
        setKvdCert(
            getCertForm({
                config: {
                    title: 'Справка из кожно-венерологического диспансера (КВД)',
                    issueDateFieldName: 'kvd_date_of_issue',
                    organizationFieldName: 'kvd_organization',
                    docsFieldName: 'kvd_docs',
                },
            }),
        )

        setFluorographyCert(
            getCertForm({
                config: {
                    title: 'Флюорография',
                    issueDateFieldName: 'fluorography_date_of_issue',
                    organizationFieldName: 'fluorography_organization',
                    docsFieldName: 'fluorography_docs',
                },
            }),
        )

        setVichRwCert(
            getCertForm({
                config: {
                    title: 'ВИЧ, сифилиc',
                    issueDateFieldName: 'vichrw_date_of_issue',
                    organizationFieldName: 'vichrw_organization',
                    docsFieldName: 'vichrw_docs',
                },
            }),
        )

        setGraftCert(
            getCertForm({
                config: {
                    title: 'Сертификат о прививках',
                    issueDateFieldName: 'graft_date_of_issue',
                    organizationFieldName: 'graft_organization',
                    docsFieldName: 'graft_docs',
                },
            }),
        )
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                {form && setForm && <InputArea {...form} setData={setForm as any} />}
                {kvdCert && setKvdCert && <InputArea {...kvdCert} setData={setKvdCert as any} />}
                {fluorographyCert && setFluorographyCert && (
                    <InputArea {...fluorographyCert} setData={setFluorographyCert as any} />
                )}
                {vichRwCert && setVichRwCert && <InputArea {...vichRwCert} setData={setVichRwCert as any} />}
                {graftCert && setGraftCert && <InputArea {...graftCert} setData={setGraftCert as any} />}
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        globalAppSendForm(
                            'postRequestMedicalCertificate' as any,
                            [form, kvdCert, fluorographyCert, vichRwCert, graftCert] as IInputArea[],
                            setLoading,
                            setCompleted,
                        )
                    }}
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
