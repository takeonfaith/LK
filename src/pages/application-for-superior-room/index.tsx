import { superiorRoomModel } from '@entities/superior-room'
import { FormBlock, SubmitButton, Wrapper } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getForm from './lib/get-form'
import sendForm from './lib/send-form'

const ApplicationForSuperiorRoomWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        padding: 0;
    }
`

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const ApplicationForSuperiorRoom = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, error } = superiorRoomModel.selectors.useSuperiorRoom()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //fetch
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    return (
        <Wrapper load={() => superiorRoomModel.effects.getSuperiorRoomFx()} loading={!data} error={error} data={data}>
            <ApplicationForSuperiorRoomWrapper>
                {!!form && !!setForm && (
                    <FormBlock>
                        <InputArea {...form} setData={setForm as LoadedState} />
                        <SubmitButton
                            text={data?.is_avaliable ? 'Отправить' : 'Отправленно'}
                            // Функция отправки здесь
                            action={() => sendForm(form, setLoading, setCompleted)}
                            isLoading={loading}
                            completed={completed}
                            // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                            setCompleted={setCompleted}
                            isDone={!data?.is_avaliable ?? false}
                            isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                            popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были заполнены"
                            popUpSuccessMessage="Данные формы успешно отправлены"
                        />
                    </FormBlock>
                )}
            </ApplicationForSuperiorRoomWrapper>
        </Wrapper>
    )
}

export default ApplicationForSuperiorRoom
