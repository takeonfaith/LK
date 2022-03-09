import { userModel } from '@entities/user'
import { FormBlock, SubmitButton, Wrapper } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { useRender } from '@utils/hooks/use-render'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getForm from './lib/get-form'

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
    const [data, setData] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    useEffect(() => {
        //fetch
        if (!!user) {
            setData(getForm(user))
        }
    }, [])
    useRender('form')

    return (
        <Wrapper load={() => null} loading={false} error={null} data={[]}>
            <ApplicationForSuperiorRoomWrapper>
                {!!data && !!setData && (
                    <FormBlock>
                        <InputArea {...data} setData={setData as LoadedState} />
                        <SubmitButton
                            text={'Отправить'}
                            // Функция отправки здесь
                            action={() => null}
                            isLoading={loading}
                            completed={completed}
                            // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                            setCompleted={setCompleted}
                            isActive={false}
                            popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были подтверждены"
                            popUpSuccessMessage="Данные формы успешно отправлены"
                        />
                    </FormBlock>
                )}
            </ApplicationForSuperiorRoomWrapper>
        </Wrapper>
    )
}

export default ApplicationForSuperiorRoom
