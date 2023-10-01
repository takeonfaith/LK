import { projectActivitesModel } from '@entities/project-activites'
import { Colors } from '@shared/constants'
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
import { userModel } from '@entities/user'
import { ProjectActivityIntroMessage } from './ui/intro-message'

const Container = styled.div`
    h3 {
        background: ${Colors.blue.main};
        background: linear-gradient(to right, ${Colors.blue.main} 0%, ${Colors.pink.main} 100%);
        -webkit-background-clip: text;
        background-clip: text;
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
    const {
        data: { user },
    } = userModel.selectors.useUser()
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
                    <ProjectActivityIntroMessage course={user?.course} />
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
