import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { FormBlock, Message, SubmitButton, Title, Wrapper } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import localizeDate from '@shared/lib/dates/localize-date'
import React, { useEffect, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import styled from 'styled-components'
import getArmy from './lib/get-army'
import getContactInfo from './lib/get-contact-info'
import getDisability from './lib/get-disability'
import getDriverLicense from './lib/get-driver-license'
import getEducation from './lib/get-education'
import getFamily from './lib/get-family'
import getFamilyStatus from './lib/get-family-status'
import getLanguage from './lib/get-language'
import getLocation from './lib/get-location'
import getPassport from './lib/get-passport'
import getPersonalData from './lib/get-personal-data'
import getRegistration from './lib/get-registration'
import sendForm from './lib/send-form'

const DataVerificationPageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    .data-verification-block {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 20px;
        border-radius: var(--brLight);
        background: var(--content-block);
        box-shadow: var(--schedule-shadow);
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 1000px) {
        padding: 0;
        .data-verification-block {
            box-shadow: none;
        }
    }
`

//TODO: remove default values from this component
//TODO: нужно переписать на формах, а то глаза могут выпасть (примерные пояснения, как нужно, находятся в inputs-area)

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const DataVerificationPage = () => {
    const { data, error, completed } = teacherDateVerificationModel.selectors.useTeacherDataVerification()

    // Про это написно ниже, в сабмит баттоне
    const [submitLoading, setSubmitLoading] = useState(false)

    const [personalData, setPersonalData] = useState<IInputArea | null>(null)
    const [familyStatus, setFamilyStatus] = useState<IInputArea | null>(null)
    const [contactInfo, setContactInfo] = useState<IInputArea | null>(null)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [education, setEducation] = useState<IInputArea | null>(null)
    const [language, setLanguage] = useState<IInputArea | null>(null)
    const [passport, setPassport] = useState<IInputArea | null>(null)
    const [driveLicense, setDriveLicense] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [location, setLocation] = useState<IInputArea | null>(null)
    const [army, setArmy] = useState<IInputArea | null>(null)
    const isDone = (completed || data?.validated) ?? false

    const [confirmAll, setConfirmAll] = useState(false)

    useEffect(() => {
        setConfirmAll(false)
    }, [
        !!army?.confirmed,
        !!driveLicense?.confirmed,
        !!personalData?.confirmed,
        !!location?.confirmed,
        !!passport?.confirmed,
        !!education?.confirmed,
        !!disability?.confirmed,
        !!family?.confirmed,
        !!familyStatus?.confirmed,
        !!registration?.confirmed,
        !!language?.confirmed,
        !!contactInfo?.confirmed,
    ])

    useEffect(() => {
        if (data) {
            setPersonalData(getPersonalData(data, isDone))
            setContactInfo(getContactInfo(data, isDone))
            setPassport(getPassport(data, isDone))
            setRegistration(getRegistration(data, isDone))
            setLocation(getLocation(data, isDone))
            setFamilyStatus(getFamilyStatus(data, isDone))
            setFamily(getFamily(data, isDone))
            setEducation(getEducation(data, isDone))
            setLanguage(getLanguage(data, isDone))
            setDriveLicense(getDriverLicense(data, isDone))
            setDisability(getDisability(data, isDone))
            setArmy(getArmy(data, isDone))
        }
    }, [data])

    return (
        <Wrapper
            load={() => teacherDateVerificationModel.effects.getTeacherDataVerificationFx()}
            loading={!data}
            error={error}
            data={data}
        >
            {!!personalData &&
            !!contactInfo &&
            !!passport &&
            !!registration &&
            !!location &&
            !!familyStatus &&
            !!family &&
            !!education &&
            !!language &&
            !!driveLicense &&
            !!disability &&
            !!army ? (
                <DataVerificationPageWrapper>
                    <FormBlock>
                        {!isDone && (
                            <Title size={3} align="left" bottomGap>
                                Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите
                                изменения
                            </Title>
                        )}
                        <Message
                            type="success"
                            title={`Данные успешно отправлены ${localizeDate(data?.valid_date ?? new Date())}`}
                            icon={<FiCheckCircle />}
                            visible={isDone}
                        />
                        <InputArea
                            {...personalData}
                            collapsed={isDone}
                            setData={setPersonalData as LoadedState}
                            divider
                        />
                        <InputArea
                            {...contactInfo}
                            collapsed={isDone}
                            setData={setContactInfo as LoadedState}
                            divider
                        />
                        <InputArea {...passport} collapsed={isDone} setData={setPassport as LoadedState} divider />
                        <InputArea
                            {...registration}
                            collapsed={isDone}
                            setData={setRegistration as LoadedState}
                            divider
                        />
                        <InputArea {...location} collapsed={isDone} setData={setLocation as LoadedState} divider />
                        <InputArea
                            {...familyStatus}
                            collapsed={isDone}
                            setData={setFamilyStatus as LoadedState}
                            divider
                        />
                        <InputArea {...family} collapsed={isDone} setData={setFamily as LoadedState} divider />
                        <InputArea {...education} collapsed={isDone} setData={setEducation as LoadedState} divider />
                        <InputArea {...language} collapsed={isDone} setData={setLanguage as LoadedState} divider />
                        <InputArea
                            {...driveLicense}
                            collapsed={isDone}
                            setData={setDriveLicense as LoadedState}
                            divider
                        />
                        <InputArea {...disability} collapsed={isDone} setData={setDisability as LoadedState} divider />
                        <InputArea {...army} collapsed={isDone} setData={setArmy as LoadedState} divider />
                        {!data?.validated && (
                            <>
                                <Checkbox
                                    checked={confirmAll || isDone}
                                    setChecked={setConfirmAll}
                                    text={'Я подтверждаю корректность указанных данных'}
                                    isActive={
                                        !!army.confirmed &&
                                        !!driveLicense.confirmed &&
                                        !!personalData.confirmed &&
                                        !!location.confirmed &&
                                        !!passport.confirmed &&
                                        !!education.confirmed
                                    }
                                />
                                <SubmitButton
                                    text={!isDone ? 'Отправить' : 'Отправлено'}
                                    // Функция отправки здесь
                                    action={() =>
                                        sendForm(
                                            [
                                                army,
                                                driveLicense,
                                                personalData,
                                                location,
                                                passport,
                                                education,
                                                disability,
                                                family,
                                                familyStatus,
                                                registration,
                                                language,
                                                contactInfo,
                                            ],
                                            setSubmitLoading,
                                        )
                                    }
                                    isLoading={submitLoading}
                                    completed={completed}
                                    // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                                    setCompleted={(completed: boolean) =>
                                        teacherDateVerificationModel.events.changeCompleted({ completed })
                                    }
                                    isDone={isDone}
                                    buttonSuccessText="Отправлено"
                                    repeatable={false}
                                    isActive={
                                        !!army.confirmed &&
                                        !!driveLicense.confirmed &&
                                        !!personalData.confirmed &&
                                        !!location.confirmed &&
                                        !!passport.confirmed &&
                                        !!education.confirmed &&
                                        !!disability.confirmed &&
                                        !!family.confirmed &&
                                        !!familyStatus.confirmed &&
                                        !!registration.confirmed &&
                                        !!language.confirmed &&
                                        !!contactInfo.confirmed &&
                                        !!confirmAll
                                    }
                                    popUpFailureMessage={
                                        !isDone
                                            ? 'Для отправки формы необходимо, чтобы все поля были подтверждены'
                                            : 'Форму нельзя отправить повторно'
                                    }
                                    popUpSuccessMessage="Данные формы успешно отправлены"
                                />
                            </>
                        )}
                    </FormBlock>
                </DataVerificationPageWrapper>
            ) : null}
        </Wrapper>
    )
}

export default DataVerificationPage
