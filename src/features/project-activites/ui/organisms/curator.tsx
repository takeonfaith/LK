import { Curator as CuratorType } from '@api/model/project-activites'
import React from 'react'
import { Block } from '../atoms'
import CuratorLeftSide from '../molecules/curator-left-side'
import CuratorRightSide from '../molecules/curator-right-side'

interface Props {
    data: CuratorType
    title?: string
}

const Curator = ({ data, title = 'Куратор' }: Props) => {
    const { img, name, describe, id } = data
    return (
        <Block maxWidth="750px" orientation="horizontal">
            <CuratorLeftSide img={img} name={name} title={title} />
            <CuratorRightSide describe={describe} id={id} />
        </Block>
    )
}

export default Curator
