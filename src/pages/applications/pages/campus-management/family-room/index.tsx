import { Button, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import getFamily from './lib/get-family'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { getAdditionally, globalAppSendForm } from '@pages/applications/lib'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'

const FamilyRoomPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const history = useHistory()

    const [kvdCert, setKvdCert] = useState<IInputArea | null>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea | null>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea | null>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea | null>(listConfigCert.graftCert)

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setFamily(getFamily())
            setAdditionally(getAdditionally())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && !!family && !!additionally && (
                <FormBlock>
                    <Button
                        text="Назад к цифровым сервисам"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm} />
                    {family && <InputArea {...family} collapsed={isDone} setData={setFamily} />}
                    {kvdCert && setKvdCert && <InputArea {...kvdCert} setData={setKvdCert} />}
                    {fluorographyCert && setFluorographyCert && (
                        <InputArea {...fluorographyCert} setData={setFluorographyCert} />
                    )}
                    {vichRwCert && setVichRwCert && <InputArea {...vichRwCert} setData={setVichRwCert} />}
                    {graftCert && setGraftCert && <InputArea {...graftCert} setData={setGraftCert} />}
                    {additionally && <InputArea {...additionally} collapsed={isDone} setData={setAdditionally} />}
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.USG_GETHOSTEL_FAMILY,
                                [
                                    form,
                                    family,
                                    additionally,
                                    kvdCert,
                                    fluorographyCert,
                                    vichRwCert,
                                    graftCert,
                                ] as IInputArea[],
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
                        isActive={
                            (additionally.optionalCheckbox?.value ?? true) &&
                            !!family?.data.length &&
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
            )}
        </BaseApplicationWrapper>
    )
}

export default FamilyRoomPage
