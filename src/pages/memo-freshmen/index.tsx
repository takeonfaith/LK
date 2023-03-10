import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import React from 'react'
import { Ul } from '@features/feedback/ui/organisms/help-links'

const MemoFreshmenPage = () => {
    return (
        <CenterPage alignItems="center" padding="15px" height="100%">
            <Block height="fit-content" orientation="vertical" maxWidth="500px" gap="10px" noAppearanceInMobile>
                <GoBackButton />
                <Title size={4} align="left">
                    Вниманию студентов 1 курса!
                </Title>
                <Ul>
                    <p>
                        Пароль для доступа в Личный кабинет формируется следующим образом: <strong>StudXXXXXX!</strong>
                    </p>
                    <p>
                        где <strong>Stud</strong> - не меняется,
                    </p>
                    <p>
                        <strong>ХХХХХХ</strong> - 6 цифр номера паспорта (если количество цифр в номере паспорта меньше
                        6, то необходимое количество достигается путем добавления нулей в левую часть номера; если
                        количество цифр в номере паспорта больше 6, то указываются последние 6 цифр),
                    </p>
                    <p>
                        <strong>!</strong> - восклицательный знак, не меняется, <strong>обязателен</strong>
                    </p>
                    <p>
                        Для более подробной информации{' '}
                        <a
                            href="https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <strong> нажмите сюда</strong>
                        </a>
                    </p>
                </Ul>
            </Block>
        </CenterPage>
    )
}

export default MemoFreshmenPage
