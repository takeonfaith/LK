import { projectActivitesModel } from '@entities/project-activites'
import { Colors } from '@shared/constants'
import { Message } from '@shared/ui/message'
import PageBlock from '@shared/ui/page-block'
import Subtext from '@shared/ui/subtext'
import { Button, Divider, Title, Wrapper } from '@ui/atoms'
import React from 'react'
import { FiInfo } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import CurrentSemestr from './ui/current-semestr'
import LastSemestr from './ui/last-semestr'
import InfoModal from './ui/project-info/info-modal'
import Result from './ui/result'

const Container = styled.div`
    h3 {
        background: ${Colors.blue.main};
        background: linear-gradient(to right, ${Colors.blue.main} 0%, ${Colors.pink.main} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const ProjectStyled = styled.div`
    width: 100%;
`

const ProjectActivitiesPage = () => {
    const { data, loading, error } = projectActivitesModel.selectors.useData()
    const { open } = useModal()

    const handleOpenModal = () => {
        open(<InfoModal data={data} />, 'Информация')
    }

    return (
        <Wrapper
            load={() => projectActivitesModel.effects.getFx('1')}
            loading={loading || false}
            error={error || null}
            data={data}
        >
            <Container>
                <PageBlock>
                    <Message lineHeight="1.5rem" fontSize="0.86rem" type="info" title="Вниманию студентов 2-4 курсов!">
                        <p>
                            Уважаемые студенты!
                            <br />
                            <br />
                            Центр проектной деятельности приглашает вас выбрать проекты, которые вы будете реализовывать
                            в рамках дисциплины «Проектная деятельность» в 2023-2024 учебном году.
                            <br />
                            <br />
                            Порядок действий для выбора проектов:
                            <br />
                            <br />
                            1. Для знакомства с проектами мы создали для вас:
                            <br />• Сайт-витрину:{' '}
                            <a href="http://projects.mospolytech.ru/">http://projects.mospolytech.ru/</a>
                            <br />• Телеграм-канал, где вы можете задать вопросы инициаторам проектов, общаться с
                            потенциальными участниками проектов:{' '}
                            <a href="https://t.me/cpd_projects">https://t.me/cpd_projects</a>
                            <br />
                            <br />
                            2. Регистрация на проекты:
                            <br />
                            10 июля в 14:00 регистрация будет открыта студентам с рейтингом 2**;
                            <br />
                            12 июля с 14:00 регистрация будет открыта студентам с рейтингом 2** и 1*;
                            <br />
                            14 июля с 14:00 регистрация будет открыта всем студентам;
                            <br />
                            16 июля в 23:59 регистрация завершится.
                            <br />
                            <br />
                            Подробная информация:{' '}
                            <a href="https://vk.com/wall-78395495_2038">https://vk.com/wall-78395495_2038</a>
                            <br />
                            <br />
                            <a href="https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSybcuU7Cv0_IGEg8sP7LD_mxQYu3akGUj_xxKX-5gXtdqcwAeDhtWRM8d4WGqscS3_LIQBWUThqoXk/pubhtml?gid=0&single=true">
                                Расписание занятий по проектной деятельности
                            </a>
                            <br />
                            <br />
                            <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub">
                                Регламент начисления баллов
                            </a>
                        </p>
                    </Message>
                    {/* {!!user?.id && <Select items={items} selected={selected} setSelected={setSelected} />} */}
                    {/* <Subtext>
                        Год: {data?.year} • Полугодие: {data?.semestr}
                    </Subtext> */}
                    <ProjectStyled>
                        <Subtext fontSize="0.85rem">Вам назначен проект</Subtext>
                        <Title size={3} align="left" bottomGap>
                            {data?.project ?? '-'}
                        </Title>
                        <Subtext>
                            Тематика проекта: {data?.project_theme ?? '-'}
                            <br />
                            Подпроект: {data?.subproject.length ? data?.subproject : '-'}
                            <br />
                            Куратор: {data?.curator.length === 0 ? '-' : data?.curator}
                        </Subtext>
                        <Button
                            icon={<FiInfo />}
                            onClick={handleOpenModal}
                            text="Подробнее"
                            background="transparent"
                            padding="12px 0 0 0"
                            height="30px"
                        />
                        <Divider width="100%" margin="16px 0" />
                        <CurrentSemestr data={data} />
                        <Divider width="100%" margin="16px 0" />
                        <LastSemestr data={data} />
                        <Divider width="100%" margin="16px 0" />
                        <Result data={data} />
                    </ProjectStyled>

                    {/* {data ? (
                        <Content data={data} loading={loading} />
                    ) : (
                        <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                    )} */}
                </PageBlock>
            </Container>
        </Wrapper>
    )
}

export default ProjectActivitiesPage
