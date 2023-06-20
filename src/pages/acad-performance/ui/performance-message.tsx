import { PreparedData } from '@entities/acad-performance/lib/prepare'
import Flex from '@shared/ui/flex'
import { Image } from '@shared/ui/image'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

const AStudentBackground = styled.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #5d2466, #28549d, #1e7096);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 4s ease infinite;
    -moz-animation: AnimationName 4s ease infinite;
    animation: AnimationName 4s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`
const AlmostBackground = styled.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #580808, #5f0458, #2b0749);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

type Props = {
    data: PreparedData | null
}

const analyzeGrades = (data: PreparedData | null): 'empty' | 'a-student' | 'almost' => {
    if (!data) return 'empty'
    const mergedData = [...data.exam, ...data.test]
    let amountOfNonFives = 0

    for (let index = 0; index < mergedData.length; index++) {
        const { grade } = mergedData[index]
        if (!grade) return 'empty'

        if (grade !== 'Зачтено' && grade !== 'Отлично') {
            amountOfNonFives++
        }
    }

    if (amountOfNonFives === 1) return 'almost'
    if (amountOfNonFives > 1) return 'empty'

    return 'a-student'
}

const PerformanceMessage = ({ data }: Props) => {
    const analisys = analyzeGrades(data)

    if (analisys === 'empty') return null

    if (analisys === 'almost')
        return (
            <AlmostBackground>
                <Flex d="column" ai="flex-start" gap="4px">
                    <Title size={3} align="left">
                        Почти отличник
                    </Title>
                    <Subtext fontSize="1rem">В следующий раз повезет</Subtext>
                </Flex>
                <Image
                    src="https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g"
                    width="70px"
                    height="70px"
                    loading={false}
                />
            </AlmostBackground>
        )

    return (
        <AStudentBackground>
            <Flex d="column" ai="flex-start" gap="4px">
                <Title size={3} align="left">
                    В этом семестре ты отличник!
                </Title>
                <Subtext fontSize="1rem">Наши поздравления!</Subtext>
            </Flex>
            <Image
                src="https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif"
                width="70px"
                height="70px"
                loading={false}
            />
        </AStudentBackground>
    )
}

export default PerformanceMessage
