import React from 'react'
import { About } from '../organisms'
import { Project } from '@api/model/project-activites'
import styled from 'styled-components'
import Curator from '../organisms/curator'
import Scores from '../organisms/scores'

interface Props {
    data: Project
}

const Container = styled.div`
    display: flex;
`

const ProjectActivites = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 60px;
`

const Content = ({ data }: Props) => {
    const { about, curator, scores } = data

    return (
        <ProjectActivites>
            <Container>
                <About data={about} />
                <Curator data={curator} />
            </Container>
            <Container>
                <Scores data={scores} />
            </Container>
        </ProjectActivites>
    )
}

export default Content
