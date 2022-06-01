import { userModel } from '@entities/user'
import { CenterPage, Divider, Message, Title } from '@ui/atoms'
import BlockWrapper from '@ui/block/styles'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import styled from 'styled-components'
import instructionsStudentData, { InstructionsType } from './data/student-data'
import instructionsTeacherData from './data/teacher-data'
import search from './lib/search'

const CustomBlock = styled(BlockWrapper)`
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: var(--blue);
    }

    .links-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

const CustomLink = styled.a`
    display: flex;
    align-items: center;
    column-gap: 5px;

    svg {
        min-width: 25px;
        height: 25px;
    }

    .link-image {
        /* background: var(--form);
        box-shadow: 0 0 1px #00000075; */
        border-radius: 5px;
        min-width: 30px;
        height: 30px;
        padding: 5px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

const InstructionsPage = () => {
    const [foundLinks, setFoundLinks] = useState<Nullable<InstructionsType[]>>(null)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const data = user?.user_status === 'stud' ? instructionsStudentData : instructionsTeacherData
    return (
        <CenterPage alignItems="flex-start" padding="10px">
            <CustomBlock orientation="vertical" gap="10px" maxWidth="650px" height="fit-content">
                <Title size={3} align="left">
                    Инструкции, положения, правила
                </Title>
                <LocalSearch<InstructionsType[], InstructionsType[]>
                    placeholder="Поиск инструкций, положений, правил"
                    whereToSearch={data}
                    searchEngine={search}
                    setResult={setFoundLinks}
                />
                <Divider />
                <div className="wrapper">
                    {(foundLinks ?? data).map((el) => {
                        return (
                            <section key={el.title}>
                                <Title size={4} align="left" bottomGap>
                                    {el.title}
                                </Title>
                                <div className="links-list">
                                    {el.links.map(({ link, title, icon }) => {
                                        return (
                                            <CustomLink href={link} key={title} target="_blank">
                                                {typeof icon === 'string' ? (
                                                    <div className="link-image">
                                                        <img src={icon} />
                                                    </div>
                                                ) : (
                                                    icon({})
                                                )}
                                                {title}
                                            </CustomLink>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </div>

                <Message title="Уважаемые коллеги!" type="info">
                    <p>
                        Для удобства сотрудников в условиях дистанционной работы Московского Политеха мы запустили линию
                        консультирования по вопросам ИТ через приложение WhatsApp.
                    </p>
                    <p>
                        Линия консультаций Техподдержки ИТ доступна по номеру +7 985 770 21 96 – добавьте его себе в
                        контакты и пишите вопросы нам в самом распространённом мессенджере.
                    </p>
                    <p>
                        Также мы запустили функцию автоматической фиксации всех заявок, поступающих через Личный кабинет{' '}
                        <a href="e.mospolytech.ru">e.mospolytech.ru</a> и на почту{' '}
                        <a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>. Просьба направлять сложные заявки
                        на обслуживание и решение вопросов по ИТ с помощью этих способов – это позволит более точно
                        описать проблему.
                    </p>
                    <p>
                        Напомню, что с 1 апреля 2020 года заявки по вопросам технической поддержки компьютеров и
                        программного обеспечения, кроме внутреннего номера 1111, принимаются по телефонам: +79853504173,
                        +79853503944, +79853523122
                    </p>
                    <p>
                        Уважаемый пользователь! Для ускорения технической поддержки удалённо, просим Вас скачать
                        программу удаленного доступа Ассистент по ссылке:{' '}
                        <a href="https://мойассистент.рф/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C/Download/540">
                            мойассистент.рф
                        </a>
                    </p>
                </Message>
            </CustomBlock>
        </CenterPage>
    )
}

export default InstructionsPage
