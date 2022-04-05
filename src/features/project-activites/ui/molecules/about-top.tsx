import { Info } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import AboutTitle from '../atoms/about-title'
import Describe from '../atoms/describe'
import OpenDescribeButton from '../atoms/open-describe-button'
import Stars from '../atoms/stars'

interface Props {
    openDescribe: boolean
    handleOpenDescribe: () => void
    data: Info
    setOpenDescribe: React.Dispatch<React.SetStateAction<boolean>>
}

const Container = styled.div`
    height: 55%;
    background: var(--schedule);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.301);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: 0.2s;
    border-radius: calc(var(--brSemi) - 7px);
    cursor: pointer;
`

const AboutTop = ({ openDescribe, handleOpenDescribe, data, setOpenDescribe }: Props) => {
    return (
        <Container style={openDescribe ? { height: '100%' } : {}} onClick={handleOpenDescribe}>
            <Stars stars={data.stars} needHide={openDescribe} />
            <OpenDescribeButton handleOpen={() => setOpenDescribe(!openDescribe)} isOpen={openDescribe} />
            <span style={openDescribe ? { opacity: 0, transition: 0.2 + 's' } : {}}>Ваш текущий проект:</span>
            <AboutTitle title={data.name} />
            <Describe isOpen={openDescribe} describe={data.describe} />
        </Container>
    )
}

export default AboutTop
