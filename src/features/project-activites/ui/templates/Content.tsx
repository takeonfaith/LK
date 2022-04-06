import { Project } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import { About } from '../organisms'
import Curator from '../organisms/curator'
import Participants from '../organisms/participants'
import Scores from '../organisms/scores'

interface Props {
    data: Project
    loading?: boolean
}

const Wrapper = styled.div`
    padding-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1300px;
    justify-content: center;

    /* @media(max-width:) */
`

const Content = ({ data, loading }: Props) => {
    const { about, curator, scores, participants } = data

    return (
        <Wrapper>
            <About data={!loading ? about : null} />
            <Curator data={!loading ? curator : null} />
            <Scores data={!loading ? scores : null} />
            <Participants data={!loading ? participants : null} />
        </Wrapper>
    )
}

export default Content
