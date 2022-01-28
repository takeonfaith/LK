import { Project } from '@entities/project-activites/model/types'
import React from 'react'
import About from '../organisms/About'

const Content = (data: Project) => {
    const { about } = data
    return (
        <div>
            <About data={about} />
        </div>
    )
}

export default Content
