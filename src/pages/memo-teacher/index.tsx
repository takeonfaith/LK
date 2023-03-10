import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import React from 'react'
import { Ul } from '@features/feedback/ui/organisms/help-links'

const MemoTeacherPage = () => {
    return (
        <CenterPage alignItems="center" padding="15px" height="100%">
            <Block height="fit-content" orientation="vertical" maxWidth="500px" gap="10px" noAppearanceInMobile>
                <GoBackButton />
                <Title size={4} align="left">
                    Вниманию сотрудников!
                </Title>
                <Ul>
                    <p>
                        Пароль для входа в личный кабинет - в большинстве случаев тот же пароль, который Вы вводите при
                        входе в рабочий компьютер.
                    </p>
                    <p>
                        По умолчанию его значение равно <strong>Staff#ХХХХХХ</strong>
                    </p>
                    <p>
                        где <strong>#</strong> — специальный символ,
                    </p>
                    <p>
                        <strong>ХХХХХХ</strong> — последние 6 цифр номера паспорта
                    </p>
                </Ul>
            </Block>
        </CenterPage>
    )
}

export default MemoTeacherPage
