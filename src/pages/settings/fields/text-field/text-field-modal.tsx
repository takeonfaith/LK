import { FieldProps } from '@pages/settings/model'
import useFormValidation, { TRules } from '@shared/lib/hooks/use-form-validation'
import { Button, Divider, Input, Message, SubmitButton, Title } from '@shared/ui/atoms'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const TextFieldModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const rules: TRules = [{ text: 'Необходимо изменить строку', test: (v1, v2) => v1 !== v2 }]

const TextFieldModal = (props: FieldProps) => {
    const { value, message, action, type, title, additionalActions } = props
    const [inputValue, setInputValue] = useState<string>(value as string)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>('')
    const [completed, setCompleted] = useState(false)
    const { close } = useModal()
    const { isActive, validationError } = useFormValidation(rules, [inputValue, value as string])

    const handleSubmit = async () => {
        try {
            setLoading(true)
            await action?.(inputValue)
            additionalActions?.onSuccess?.(inputValue)
            setLoading(false)
            setCompleted(true)
        } catch (error) {
            setError('Возникла ошибка: ' + (error as Error).message)
            setLoading(false)
        }
    }

    useEffect(() => {
        setInputValue(value as string)
        setError(null)
    }, [title])

    return (
        <TextFieldModalStyled key={title}>
            <Title size={3} align="left">
                {title}
            </Title>
            {message && (
                <Message type={message.type ?? ''} title={message.title}>
                    {message.body}
                </Message>
            )}
            <Message type="failure" visible={!!error}>
                {error}
            </Message>
            <Input value={inputValue} setValue={setInputValue} type={type} mask />
            <Divider />
            <Buttons>
                <Button text="Отменить" width="100%" onClick={close} />
                <SubmitButton
                    isLoading={loading}
                    completed={completed}
                    isActive={isActive}
                    text={'Обновить'}
                    action={handleSubmit}
                    setCompleted={setCompleted}
                    popUpFailureMessage={validationError?.text}
                    height="38px"
                />
            </Buttons>
        </TextFieldModalStyled>
    )
}

export default TextFieldModal
