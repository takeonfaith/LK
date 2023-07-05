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

    & > span {
        line-height: 1.7rem;
    }

    @media (min-width: 1001px) {
        max-width: 400px;
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
                    <span>
                        Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами
                        (многофункциональный центр)
                    </span>
                    <LinkButton
                        onClick={() => null}
                        href={'https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/'}
                        text="Контакты центра по работе со студентами"
                        width="100%"
                        align="center"
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
