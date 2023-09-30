import { changePassword } from '@shared/api/user-api'
import useFormValidation from '@shared/lib/hooks/use-form-validation'
import { AnimatedCheck, Button, Input, SubmitButton, Title } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/atoms/checkbox'
import List from '@shared/ui/list'
import { Message } from '@shared/ui/message'
import ProgressBar from '@shared/ui/progress-bar'
import Subtext from '@shared/ui/subtext'
import React, { useState } from 'react'
import { MANDATORY_RULES, OPTIONAL_RULES } from './const'
import generatePassword from './lib/generate-password'
import getPasswordStrength from './lib/get-password-strength'
import { Buttons, ChangePasswordStyled, CheckStyled, FormStyled, InputsStyled, LeftSide, TopLeftSide } from './styles'
import { useModal } from 'widgets'

const ChangePassword = () => {
    const [old, setOld] = useState('')
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const { isActive, validationError } = useFormValidation(MANDATORY_RULES, [first, second, old])
    const strength = getPasswordStrength(first)

    const { close } = useModal()

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(12)
        setFirst(newPassword)
        setSecond(newPassword)
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const result = await changePassword(old, first)
            if (result.data.result !== 'ok') {
                throw new Error(result.data.errors)
            }
            setCompleted(true)
            setLoading(false)
            setFirst('')
            setSecond('')
            setOld('')
        } catch (error) {
            const normalizedError = (error as Error).message ?? error
            setError('Возникла ошибка: ' + normalizedError)
            setLoading(false)
        }
    }

    return (
        <ChangePasswordStyled>
            <LeftSide>
                <TopLeftSide>
                    <Title size={3} align="left">
                        Смена пароля
                    </Title>
                    <Subtext width="100%" align="left" fontSize="0.9rem">
                        Обязательные требования
                    </Subtext>
                    <List gap={8} direction="vertical">
                        {MANDATORY_RULES.map((rule) => {
                            return (
                                <Checkbox
                                    fontSize="0.85rem"
                                    key={rule.text}
                                    setChecked={() => null}
                                    text={rule.text}
                                    checked={rule.test(first, second, old)}
                                />
                            )
                        })}
                    </List>
                    <Subtext width="100%" align="left" fontSize="0.9rem">
                        Необязательные требования
                    </Subtext>
                    <List gap={8} direction="vertical">
                        {OPTIONAL_RULES.map((rule) => {
                            return (
                                <Checkbox
                                    fontSize="0.85rem"
                                    key={rule.text}
                                    setChecked={() => null}
                                    text={rule.text}
                                    checked={rule.test(first, second, old)}
                                />
                            )
                        })}
                    </List>
                </TopLeftSide>
                {!isActive && (
                    <Button
                        width="100%"
                        text="Сгенерировать пароль"
                        onClick={handleGeneratePassword}
                        background="var(--theme-2)"
                    />
                )}
                {isActive && (
                    <CheckStyled>
                        <AnimatedCheck size="40px" />
                        <Title size={5}>Отличный пароль!</Title>
                    </CheckStyled>
                )}
            </LeftSide>
            <FormStyled>
                <InputsStyled>
                    <Message title="Ошибка" type="failure" visible={!!error}>
                        {error}
                    </Message>
                    <Input
                        type="password"
                        title="Введите старый пароль"
                        placeholder="Введите пароль"
                        value={old}
                        setValue={setOld}
                        required
                    />
                    <Input
                        type="password"
                        title="Придумайте пароль"
                        placeholder="Введите пароль"
                        value={first}
                        setValue={setFirst}
                        required
                    />
                    <Input
                        type="password"
                        title="Повторите пароль"
                        placeholder="Введите тот же пароль"
                        value={second}
                        setValue={setSecond}
                        required
                    />
                    <ProgressBar value={strength.value} size="small" title={`Сложность пароля: ${strength.title}`} />
                </InputsStyled>

                <Buttons>
                    <Button text="Отменить" width="100%" onClick={close} />
                    <SubmitButton
                        isLoading={loading}
                        completed={completed}
                        text="Обновить"
                        popUpFailureMessage={`Требование к паролю: ${validationError?.text}`}
                        action={handleSubmit}
                        setCompleted={setCompleted}
                        height="38px"
                        isActive={isActive}
                    />
                </Buttons>
            </FormStyled>
        </ChangePasswordStyled>
    )
}

export default ChangePassword
