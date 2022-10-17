import List from '@ui/list'
import { Direction } from '@ui/types'
import React from 'react'
import { Circle, Line } from './ui'
import { CircleProps } from './ui/atoms/circle'
import { LineProps } from './ui/atoms/line'

export type TimelineItem = CircleProps & LineProps & { id: number }

export type TimelineProps = {
    direction?: Direction
    current?: number
    onCircleClick?: (id: number) => void
}

type Props = TimelineProps & {
    data: TimelineItem[]
}

const Timeline = ({ data, direction = 'vertical', onCircleClick, current }: Props) => {
    return (
        <List gap={5} innerPadding="50px" direction={direction} showPages verticalAlign="center">
            {data.map(({ id, type, title, insideCircle, hint, distance, content, filled }, i) => {
                return (
                    <>
                        <Circle
                            title={title}
                            hint={hint}
                            content={content}
                            type={type}
                            reached={filled !== undefined ? filled === 100 : true}
                            insideCircle={insideCircle}
                            key={title}
                            onCircleClick={onCircleClick}
                            current={current === id}
                            id={id}
                            direction={direction}
                        />
                        {i !== data.length - 1 && (
                            <Line
                                direction={direction}
                                distance={distance}
                                reached={filled !== undefined ? filled === 100 : true}
                                filled={filled}
                            />
                        )}
                    </>
                )
            })}
        </List>
    )
}

export default Timeline
