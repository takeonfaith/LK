import findPercentage from '@features/acad-performance/lib/find-percentage'
import { AcadPerformance } from '@shared/api/model/acad-performance'
import { Colors } from '@shared/consts'
import Flex from '@shared/ui/flex'
import { SkeletonShape } from '@shared/ui/skeleton-shape'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const LinesWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    gap: 2px;
    height: 10px;
    background: var(--form);
`

const Line = styled.div<{ percent: number; color: string }>`
    width: ${({ percent }) => `calc(${percent} * 100%)`};
    height: 10px;
    background: ${({ color }) => color};
    display: flex;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    display: ${({ percent }) => percent === 0 && 'none'};
`

const Stat = styled(Flex)<{ percentage: number }>`
    opacity: ${({ percentage }) => percentage === 0 && '0.2'};
`

const Square = styled.div`
    min-width: 10px;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${({ color }) => color};
`

type Props = {
    data: AcadPerformance[] | null
    loading: boolean
}

const GradeGraph = ({ data, loading }: Props) => {
    if (!data) return null

    if (loading) return <SkeletonShape margin="0" shape="rect" size={{ width: '100%', height: '12px' }} />

    const percentage = findPercentage(data)

    return (
        <Flex d="column" gap="10px">
            <LinesWrapper>
                <Line percent={percentage['5']} color={Colors.green.main}></Line>
                <Line percent={percentage['4']} color={Colors.blue.main}></Line>
                <Line percent={percentage['3']} color={Colors.orange.main}></Line>
                <Line percent={percentage['2']} color={Colors.red.main}></Line>
            </LinesWrapper>
            <Flex gap="30px">
                <Stat percentage={percentage['5']} gap="4px" w="fit-content">
                    <Square color={Colors.green.main} />
                    <Subtext>5 - {(percentage['5'] * 100).toFixed(1)}%</Subtext>
                </Stat>
                <Stat percentage={percentage['4']} gap="4px" w="fit-content">
                    <Square color={Colors.blue.main} />
                    <Subtext>4 - {(percentage['4'] * 100).toFixed(1)}%</Subtext>
                </Stat>
                <Stat percentage={percentage['3']} gap="4px" w="fit-content">
                    <Square color={Colors.orange.main} />
                    <Subtext>3 - {(percentage['3'] * 100).toFixed(1)}%</Subtext>
                </Stat>
                <Stat percentage={percentage['2']} gap="4px" w="fit-content">
                    <Square color={Colors.red.main} />
                    <Subtext>2 - {(percentage['2'] * 100).toFixed(1)}%</Subtext>
                </Stat>
            </Flex>
        </Flex>
    )
}

export default GradeGraph
