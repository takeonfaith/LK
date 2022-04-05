import { Info } from '@api/model/project-activites'
import React, { useState } from 'react'
import { Block } from '../atoms'
import AboutBottom from '../molecules/about-bottom'
import AboutTop from '../molecules/about-top'

interface Props {
    data: Info
}

const About = ({ data }: Props) => {
    const [openDescribe, setOpenDescribe] = useState<boolean>(false)

    const handleOpenDescribe = () => {
        if (!openDescribe) {
            setOpenDescribe(!openDescribe)
        }
    }

    return (
        <Block maxWidth="500px" orientation="vertical">
            <AboutTop
                data={data}
                handleOpenDescribe={handleOpenDescribe}
                openDescribe={openDescribe}
                setOpenDescribe={setOpenDescribe}
            />
            <AboutBottom openDescribe={openDescribe} theme={data.theme} />
        </Block>
    )
}

export default About
