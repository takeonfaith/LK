import { acadPerformanceModel } from '@entities/acad-performance'
import findColor from '@features/acad-performance/lib/find-color'
import findPercentage from '@features/acad-performance/lib/find-percentage'
import { SkeletonShape, Title } from '@ui/atoms'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`

const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h4 {
        width: 100%;
        height: fit-content;
        display: inline-block;
        margin-top: 10px;
    }

    & svg {
        width: 160px;
        height: 160px;

        & g {
            & circle {
                width: 70px;
                height: 70px;
                fill: none;
                stroke-width: 15;
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: 440px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    margin: 0 20px;
    position: relative;
    user-select: none;
    & h3 {
        position: absolute;
    }
`

const Info = styled.div`
    position: absolute;
    top: 100px;
    font-size: 0.8em;
    font-weight: bold;
`

const Page = styled.div`
    position: absolute;
    width: 40px;
    height: 10px;
    top: 120px;
    display: flex;
    justify-content: space-around;

    & span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--almostTransparentOpposite);
        transform: scale(0.8);
    }
`

const Arrows = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 80%;
    cursor: pointer;

    &:hover {
        filter: brightness(0.8);
    }

    & .arrow {
        width: 30px;
    }
`

const GraphicInfo = () => {
    const { data, loading } = acadPerformanceModel.selectors.useAcadPerformance()

    const [circleMode, setCircleMode] = useState(1)
    const examPercentage = data?.exam.length ? findPercentage(data.exam, circleMode) : 0
    const easyExamPercentage = data?.test.length ? findPercentage(data.test) : 0

    return (
        <Wrap>
            <Circle>
                <Card>
                    {loading ? (
                        <SkeletonShape
                            shape="circle"
                            margin="0"
                            size={{
                                width: '160px',
                                height: '160px',
                            }}
                        />
                    ) : (
                        <>
                            <svg style={{ filter: 'drop-shadow(0 0 25px ' + findColor(examPercentage) + ')' }}>
                                <g>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </g>
                                <g>
                                    <circle
                                        cx="70"
                                        cy="70"
                                        r="70"
                                        style={{
                                            strokeDashoffset: (1 - examPercentage) * 440 + 'px',
                                            stroke: findColor(examPercentage),
                                        }}
                                        strokeDasharray={440}
                                        strokeLinecap="round"
                                    ></circle>
                                </g>
                            </svg>
                            <h3>{(examPercentage * 100).toFixed(0)}% </h3>
                            <Arrows>
                                <FiChevronLeft
                                    className="arrow"
                                    style={circleMode === 0 ? { opacity: '.3' } : {}}
                                    onClick={() => {
                                        if (circleMode - 1 > -1) setCircleMode(circleMode - 1)
                                    }}
                                ></FiChevronLeft>
                                <FiChevronRight
                                    className="arrow"
                                    style={circleMode === 2 ? { opacity: '.3' } : {}}
                                    onClick={() => {
                                        if (circleMode + 1 < 3) setCircleMode(circleMode + 1)
                                    }}
                                ></FiChevronRight>
                            </Arrows>
                            <Info>{circleMode === 0 ? 'Сдано' : circleMode === 1 ? 'На 5' : 'На 4'}</Info>
                            <Page>
                                <span
                                    style={
                                        circleMode === 0
                                            ? { background: findColor(examPercentage), transform: 'scale(1)' }
                                            : {}
                                    }
                                ></span>
                                <span
                                    style={
                                        circleMode === 1
                                            ? { background: findColor(examPercentage), transform: 'scale(1)' }
                                            : {}
                                    }
                                ></span>
                                <span
                                    style={
                                        circleMode === 2
                                            ? { background: findColor(examPercentage), transform: 'scale(1)' }
                                            : {}
                                    }
                                ></span>
                            </Page>
                        </>
                    )}
                </Card>
                <Title size={4}>Экзамены</Title>
            </Circle>
            <Circle>
                <Card>
                    {loading ? (
                        <SkeletonShape
                            shape="circle"
                            margin="0"
                            size={{
                                width: '160px',
                                height: '160px',
                            }}
                        />
                    ) : (
                        <>
                            <svg style={{ filter: 'drop-shadow(0 0 25px ' + findColor(easyExamPercentage) + ')' }}>
                                <g>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </g>
                                <g>
                                    <circle
                                        cx="70"
                                        cy="70"
                                        r="70"
                                        style={{
                                            strokeDashoffset: (1 - easyExamPercentage) * 440 + 'px',
                                            stroke: findColor(easyExamPercentage),
                                        }}
                                        strokeDasharray={440}
                                        strokeLinecap="round"
                                    ></circle>
                                </g>
                            </svg>
                            <h3>{(easyExamPercentage * 100).toFixed(0)}%</h3>
                            <Info>Сдано</Info>
                        </>
                    )}
                </Card>
                <Title size={4}>Зачеты</Title>
            </Circle>
        </Wrap>
    )
}

export default GraphicInfo
