import { userModel } from '@entities/user'
import { LinkButton } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const MistakeModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    text-align: center;

    @media (min-width: 1001px) {
        max-width: 300px;
    }
`

const MistakeModal = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <MistakeModalWrapper>
            {user?.user_status === 'stud' ? (
                <>
                    Для изменения данных Вам необходимо обратиться в Ваше отделение центра по работе со студентами.
                    <LinkButton
                        onClick={() => null}
                        href={'https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/'}
                        text="Контакты центра по работе со студентами"
                        width="100%"
                    />
                </>
            ) : (
                <>
                    Для изменения данных Вам необходимо обратиться в отдел кадров по телефону
                    <br />
                    <b>+7 (495) 223-05-23 доб.1130</b>
                    или написать письмо на
                    <br />
                    <b>ok@mospolytech.ru</b>
                </>
            )}
        </MistakeModalWrapper>
    )
}

export default MistakeModal
