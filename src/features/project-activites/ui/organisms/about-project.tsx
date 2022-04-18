import { Info } from '@api/model/project-activites'
import Block from '@ui/block'
import { SkeletonShape } from '@ui/skeleton-shape'
import React, { useState } from 'react'
import styled from 'styled-components'
import { LoadingWrapper } from '../atoms'
import AboutBottom from '../molecules/about-bottom'
import AboutTop from '../molecules/about-top'

interface Props {
    data: Nullable<Info>
}

const LoadingContainer = styled(LoadingWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Loading = () => {
    return (
        <LoadingContainer>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '150px',
                }}
                margin="0px 0 4rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '70%',
                    height: '20px',
                }}
                margin="0"
            />
        </LoadingContainer>
    )
}

const About = ({ data }: Props) => {
    const [openDescribe, setOpenDescribe] = useState<boolean>(false)

    const handleOpenDescribe = () => {
        if (!openDescribe) {
            setOpenDescribe(!openDescribe)
        }
    }

    return (
        <Block maxWidth="420px" orientation="vertical" loading={!data} skeleton={<Loading />}>
            {!!data && (
                <>
                    <AboutTop
                        data={data}
                        handleOpenDescribe={handleOpenDescribe}
                        openDescribe={openDescribe}
                        setOpenDescribe={setOpenDescribe}
                    />
                    <AboutBottom openDescribe={openDescribe} theme={data.theme} />
                </>
            )}
        </Block>
    )
}

export default About
