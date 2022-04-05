import { Curator as CuratorType } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import CuratorLeftSide from '../molecules/curator-left-side'
import CuratorRightSide from '../molecules/curator-right-side'

interface Props {
    data: CuratorType
    title?: string
}

const AboutCurator = styled.div`
    background: var(--search);
    border-radius: var(--brBold);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 330px;
    box-sizing: border-box;
    max-width: 750px;

    &::-webkit-scrollbar {
        width: 12px;
    }
`

const Curator = ({ data, title = 'Куратор' }: Props) => {
    const { img, name, describe, id } = data
    return (
        <AboutCurator>
            <CuratorLeftSide img={img} name={name} title={title} />
            <CuratorRightSide describe={describe} id={id} />
        </AboutCurator>
    )
}

export default Curator
