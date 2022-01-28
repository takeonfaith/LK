import React from 'react'
import { Info } from '@entities/project-activites/model/types'

interface Props {
    data: Info
}

const About = ({ data }: Props) => {
    return <div>{JSON.stringify({ data })}</div>
}

export default About
