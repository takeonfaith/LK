import { Project } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import { About } from '../organisms'
import Curator from '../organisms/curator'
import Participants from '../organisms/participants'
import Scores from '../organisms/scores'

interface Props {
    data: Project
}

const Wrapper = styled.div`
    padding-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1300px;
`

const Content = ({ data }: Props) => {
    const { about, curator, scores, participants } = data

    return (
        <Wrapper>
            <About data={about} />
            <Curator data={curator} />
            <Scores data={scores} />
            <Participants data={participants} />
        </Wrapper>
    )
}

export default Content
