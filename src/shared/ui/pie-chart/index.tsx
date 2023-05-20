import React from 'react'
import styled from 'styled-components'
import { Size } from '../types'
import { Colors } from '@shared/consts'
import { SkeletonShape } from '../skeleton-shape'
import { Title } from '../title'

const FACTOR = 2.7

const PieChartStyled = styled.div<{ width: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & .center {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 500;
        opacity: 0.8;
        display: block;
    }

    & svg {
        width: ${({ width }) => width}px;
        height: ${({ width }) => width}px;

        & g {
            & circle {
                fill: none;
                stroke-width: ${({ width }) => width / 10};
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: ${({ width }) => width * FACTOR}px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`

type Props = {
    percent: number
    label?: string
    size?: Size
    loading?: boolean
    children?: ChildrenType
}

const PieChart = ({ percent, children, label, size = 'middle', loading = false }: Props) => {
    const width = ({ small: 80, middle: 160, big: 240 } as const)[size]
    const strokeDashoffset = (1 - percent) * width * FACTOR + 'px'
    const s = width / 2 - 10
    const chartLabel = label ?? `${(percent * 100).toFixed(0)}%`
    return (
        <PieChartStyled width={width}>
            {!loading && (
                <>
                    <svg>
                        <g>
                            <circle cx={s} cy={s} r={s - 2}></circle>
                        </g>
                        <g>
                            <circle
                                cx={s}
                                cy={s}
                                r={s - 2}
                                style={{
                                    strokeDashoffset,
                                    stroke: Colors.blue.main,
                                }}
                                strokeDasharray={width * FACTOR}
                                strokeLinecap="round"
                            ></circle>
                        </g>
                    </svg>
                    <div className="center">{children}</div>
                </>
            )}
            {loading ? (
                <>
                    <SkeletonShape
                        shape="circle"
                        margin="0"
                        size={{
                            width: `${width}px`,
                            height: `${width}px`,
                        }}
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: `${width / 2}px`,
                            height: `${width / 6}px`,
                        }}
                        margin="12px 0 0 0"
                    />
                </>
            ) : (
                <Title size={4}>{chartLabel}</Title>
            )}
        </PieChartStyled>
    )
}

export default PieChart
