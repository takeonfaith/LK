import { projectActivitesModel } from '@entities/project-activites'
import { Colors } from '@shared/consts'
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
                        Актуальная информация на 1 сентября 2022 г.:
                        <br />
                        1. Дата первой встречи по проектам:
                        <br /> - 5 сентября для студентов 2-5 курсов; <br />- 19 сентября для студентов 1 курса.
                        <br />
                        <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1Jm1FlsR4ldXW75Qkval9K2_c_Zs8u96xcFsP9eOCRmao7MbETHUFWY7rr_s4qC-5_Hyr-p1XC4tr/pubhtml?gid=845074321&single=true">
                            2. Расписание занятий по проектам 2-4 курсов
                        </a>
                        3. Регламент начисления баллов по дисциплинам “Введение в проектную деятельность” и “Проектная
                        деятельность”, порядок и сроки пересдач по дисциплинам “Введение в проектную деятельность”,
                        “Проектная деятельность”, “Управление проектами” и “Основы технологического предпринимательства”
                        доступен по ссылке
                        <a href="https://docs.google.com/document/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub">
                            https://docs.google.com/document/d/e/2PAC...
                        </a>
                        <br />
                        Всем успешной работы на проектах!
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
