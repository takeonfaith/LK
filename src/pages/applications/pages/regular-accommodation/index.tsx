import { userModel } from '@entities/user'
import { Button, FormBlock, SubmitButton, Title } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import { BaseApplicationWrapper } from '@pages/applications/ui/base-application-wrapper'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import { useHistory } from 'react-router'
import getDisability from '@pages/applications/pages/regular-accommodation/lib/get-disability'
import getDriverLicense from '@pages/applications/pages/regular-accommodation/lib/get-driver-license'
import getRegistration from '@pages/applications/pages/regular-accommodation/lib/get-registration'
import getMilitaryService from '@pages/applications/pages/accommodation-correspondence-form/lib/get-militar-service'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const RegularAccommodationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [driveLicense, setDriveLicense] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [militaryService, setMilitaryService] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const history = useHistory()

    useEffect(() => {
        if (!!user) {
            setForm(getForm(user))
            setDisability(getDisability())
            setDriveLicense(getDriverLicense())
            setRegistration(getRegistration())
            setMilitaryService(getMilitaryService())
        }
    }, [user])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <Button
                        text="Назад к заявлениям"
                        icon={<FiChevronLeft />}
                        onClick={() => history.push(APPLICATIONS_ROUTE)}
                        background="transparent"
                        textColor="var(--blue)"
                    />
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    {registration && (
                        <InputArea
                            {...registration}
                            collapsed={isDone}
                            setData={setRegistration as LoadedState}
                            divider
                        />
                    )}
                    <Title size={4} align="left" bottomGap>
                        Соответствие льготной категории граждан
                    </Title>
                    {disability && (
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} divider />
                    )}
                    {driveLicense && (
                        <InputArea
                            {...driveLicense}
                            collapsed={isDone}
                            setData={setDriveLicense as LoadedState}
                            divider
                        />
                    )}
                    {militaryService && (
                        <InputArea
                            {...militaryService}
                            collapsed={isDone}
                            setData={setMilitaryService as LoadedState}
                            divider
                        />
                    )}
                    <SubmitButton
                        text={'Отправить'}
                        action={() => null}
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

export default RegularAccommodationPage
