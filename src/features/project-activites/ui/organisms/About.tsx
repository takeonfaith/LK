import { Info } from '@api/model/project-activites'
import React, { useState } from 'react'
import styled from 'styled-components'
import AboutBottom from '../molecules/about-bottom'
import AboutTop from '../molecules/about-top'

interface Props {
    data: Info
}

const CurrentProject = styled.div`
    height: 330px;
    width: 100%;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: var(--search);
    border-radius: var(--brBold);

    &::-webkit-scrollbar {
        width: 4px;
    }
`

const About = ({ data }: Props) => {
    const [openDescribe, setOpenDescribe] = useState<boolean>(false)

    const handleOpenDescribe = () => {
        if (!openDescribe) {
            setOpenDescribe(!openDescribe)
        }
    }

    return (
        <CurrentProject>
            <AboutTop
                data={data}
                handleOpenDescribe={handleOpenDescribe}
                openDescribe={openDescribe}
                setOpenDescribe={setOpenDescribe}
            />
            <AboutBottom openDescribe={openDescribe} theme={data.theme} />
        </CurrentProject>
    )
}

export default About
