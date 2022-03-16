import createApplicationSearch from '@features/applications/lib/create-application-search'
import { Title } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CreateApplicationListWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
    }

    display: flex;
    flex-direction: column;
    height: 100%;

    .list {
        padding: 5px;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        overflow-y: auto;
        height: 100%;

        .link-list {
            display: flex;
            flex-direction: column;
            width: calc(50% - 5px);
            background: var(--schedule);
            box-shadow: var(--schedule-shadow);
            padding: 10px;
            border-radius: var(--brLight);

            .links {
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 0.9em;

                & a {
                    text-decoration: none;
                    color: var(--blue);
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .link-list {
                width: 100%;
            }
        }
    }
`

export interface Section {
    title: string
    links: { title: string; link: string }[]
}

const sections: Section[] = [
    {
        title: 'Многофункциональный центр',
        links: [
            { link: '/', title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)' },
            { link: '/', title: 'Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)' },
            { link: '/', title: 'Справка-вызов' },
            { link: '/', title: 'Запрос на изменение персональных данных' },
            { link: '/', title: 'Запрос на восстановление магнитного пропуска' },
            { link: '/', title: 'Уточнение паспортных данных' },
            { link: '/', title: 'Заявка на комнату повышенной комфортности' },
        ],
    },
    {
        title: 'Профсоюзная организация',
        links: [
            { link: '/', title: 'Вступить в Профсоюз' },
            { link: '/', title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)' },
            { link: '/', title: 'Заявка на материальную помощь' },
            { link: '/', title: 'Оформить социальную стипендию' },
            {
                link: '/',
                title: 'Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии',
            },
        ],
    },
    {
        title: 'Практика',
        links: [{ link: '/', title: 'Записаться на практику' }],
    },
    {
        title: 'Мобилизационный отдел',
        links: [
            { link: '/', title: 'Отправить документы воинского учета' },
            {
                link: '/',
                title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу',
            },
        ],
    },
    {
        title: ' Отдел платных образовательных услуг',
        links: [
            { link: '/', title: 'Оформить дополнительное соглашение к договору об обучении' },
            { link: '/', title: 'Отправить квитанцию об оплате обучения или пени' },
        ],
    },
    {
        title: 'Приемная комиссия',
        links: [
            {
                link: '/',
                title: ' Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное',
            },
        ],
    },
    {
        title: 'Прочее',
        links: [
            {
                link: '/',
                title: ' Произвольный запрос',
            },
        ],
    },
]

const CreateApplicationList = () => {
    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)
    return (
        <CreateApplicationListWrapper>
            <Title size={3} align="left" bottomGap>
                Создать заявку
            </Title>
            <LocalSearch
                whereToSearch={sections}
                searchEngine={createApplicationSearch}
                setResult={setFoundSections}
                placeholder="Поиск заявок"
            />
            <div className="list">
                {(foundSections ?? sections).map((section) => {
                    return (
                        <div className="link-list" key={section.title}>
                            <Title size={4} align="left" bottomGap>
                                {section.title}
                            </Title>
                            <div className="links">
                                {section.links.map((link) => {
                                    return (
                                        <Link to={link.link} key={link.link}>
                                            {link.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </CreateApplicationListWrapper>
    )
}

export default CreateApplicationList
