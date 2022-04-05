import React from 'react'
import { About } from '../organisms'
import { Project } from '@api/model/project-activites'

interface Props {
    data: Project
}
const Content = ({ data }: Props) => {
    const { about } = data
    return (
        <div>
            <About data={about} />
        </div>
    )
}

export default Content
