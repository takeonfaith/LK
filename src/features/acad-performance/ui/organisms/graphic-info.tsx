import { acadPerformanceModel } from '@entities/acad-performance'
import findColor from '@features/acad-performance/lib/find-color'
import findPercentage from '@features/acad-performance/lib/find-percentage'
import PieChart from '@shared/ui/pie-chart'
import Subtext from '@shared/ui/subtext'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    gap: 16px;

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

    @media (max-width: 1000px) {
        width: 200px;
    }
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
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
        filter: brightness(0.8);
    }

    & .arrow {
        width: 30px;
    }
`

const GraphicInfo = () => {
    const { data, loading } = acadPerformanceModel.selectors.useData()

    const [circleMode, setCircleMode] = useState(0)
    const examPercentage = data?.exam.length ? findPercentage(data.exam, circleMode) : 0
    const easyExamPercentage = data?.test.length ? findPercentage(data.test) : 0

    return (
        <Wrap>
            <Circle>
                <PieChart percent={examPercentage} loading={loading} label="Экзамены">
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
                        <Subtext>{circleMode === 0 ? 'Сдано' : circleMode === 1 ? 'На 5' : 'На 4'}</Subtext>
                    </Arrows>
                    <Page>
                        <span
                            style={
                                circleMode === 0 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}
                            }
                        ></span>
                        <span
                            style={
                                circleMode === 1 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}
                            }
                        ></span>
                        <span
                            style={
                                circleMode === 2 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}
                            }
                        ></span>
                    </Page>
                </PieChart>
            </Circle>
            <Circle>
                <PieChart percent={easyExamPercentage} loading={loading} label="Зачеты" />
            </Circle>
        </Wrap>
    )
}

export default GraphicInfo
