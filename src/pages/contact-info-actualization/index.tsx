import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import { FormBlock, SubmitButton, Wrapper } from '@ui/atoms'
import CenterPage from '@ui/atoms/center-page'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getForm from './lib/get-form'

const ContactInfoActualizationPageWrapper = styled(CenterPage)`
    color: var(--text);
`

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ContactInfoActualizationPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, error } = contactInfoActualizationModel.selectors.useForm()

    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    // console.log(contactInfoActualizationModel.selectors.useForm())

    return (
        <Wrapper
            load={() => contactInfoActualizationModel.effects.getFormFx()}
            loading={!data}
            error={error}
            data={data}
        >
            <ContactInfoActualizationPageWrapper>
                {!!form && !!setForm && (
                    <FormBlock>
                        <InputArea setData={setForm as LoadedState} {...form} />
                        <SubmitButton
                            text={'Отправить'}
                            action={() => null}
                            isLoading={false}
                            completed={false}
                            setCompleted={() => null}
                            isActive={false}
                        />
                    </FormBlock>
                )}
            </ContactInfoActualizationPageWrapper>
        </Wrapper>
    )
}

export default ContactInfoActualizationPage
