import React from 'react'
import { About } from '../organisms'
import { Project } from '@api/model/project-activites'
import styled from 'styled-components'
import Curator from '../organisms/curator'

interface Props {
    data: Project
}

const Container = styled.div`
    display: flex;
`

const ProjectActivites = styled.div`
    padding: 60px;
`

const Content = ({ data }: Props) => {
    const { about, curator } = data

    return (
        <ProjectActivites>
            <Container>
                <About data={about} />
                <Curator data={curator} />
            </Container>
        </ProjectActivites>
    )
}

export default Content
