import { applicationsModel } from '@entities/applications'
import { medicalCertificateModel } from '@entities/medical-certificate'
import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import checkFormFields from '@shared/lib/check-form-fields'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/atoms/checkbox'
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
    const [confirmed, setConfirmed] = useState<boolean>(false)

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
        medicalCertificateModel.events.load()

        setKvdCert(
            getCertForm({
                config: {
                    title: 'Справка из кожно-венерологического диспансера',
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
                    title: 'Результаты лабораторного исследования на ВИЧ, RW',
                    issueDateFieldName: 'vichrw_date_of_issue',
                    organizationFieldName: 'vichrw_organization',
                    docsFieldName: 'vichrw_docs',
                },
            }),
        )

        setGraftCert(
            getCertForm({
                config: {
                    title: 'Сертификат о профилактических прививках',
                    issueDateFieldName: 'graft_date_of_issue',
                    organizationFieldName: 'graft_organization',
                    docsFieldName: 'graft_docs',
                },
            }),
        )
    }, [])

    return (
        <BaseApplicationWrapper isDone={false}>
            <FormBlock>
                {form && setForm && <InputArea {...form} setData={setForm} />}
                {kvdCert && setKvdCert && <InputArea {...kvdCert} setData={setKvdCert} />}
                {fluorographyCert && setFluorographyCert && (
                    <InputArea {...fluorographyCert} setData={setFluorographyCert} />
                )}
                {vichRwCert && setVichRwCert && <InputArea {...vichRwCert} setData={setVichRwCert} />}
                {graftCert && setGraftCert && <InputArea {...graftCert} setData={setGraftCert} />}
                <Checkbox
                    checked={confirmed}
                    setChecked={setConfirmed}
                    text={'Я подтверждаю корректность указанных данных'}
                />
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        globalAppSendForm(
                            ApplicationFormCodes.MEDICAL_CERT,
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
                    isActive={
                        !!confirmed &&
                        !!form &&
                        !!fluorographyCert &&
                        !!vichRwCert &&
                        !!graftCert &&
                        !!kvdCert &&
                        checkFormFields(form) &&
                        checkFormFields(fluorographyCert) &&
                        checkFormFields(vichRwCert) &&
                        checkFormFields(graftCert) &&
                        checkFormFields(kvdCert)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default MedicalCertificate
