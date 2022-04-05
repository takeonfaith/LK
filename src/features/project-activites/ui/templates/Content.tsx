import React from 'react'
import { About } from '../organisms'
import { Project } from '@api/model/project-activites'
import styled from 'styled-components'
import Curator from '../organisms/curator'
import Scores from '../organisms/scores'
import Participants from '../organisms/participants'

interface Props {
    data: Project
}

const Container = styled.div`
    display: flex;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const ProjectActivites = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    box-sizing: border-box;
    max-width: 1240px;
    width: 100%;
`

const Content = ({ data }: Props) => {
    const { about, curator, scores, participants } = data

    return (
        <Wrapper>
            <ProjectActivites>
                <Container>
                    <About data={about} />
                    <Curator data={curator} />
                </Container>
                <Container>
                    <Scores data={scores} />
                    <Participants data={participants} />
                </Container>
            </ProjectActivites>
        </Wrapper>
    )
}

export default Content
