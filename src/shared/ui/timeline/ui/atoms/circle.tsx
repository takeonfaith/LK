import { Colors } from '@consts'
import { Message } from '@ui/message'
import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

export type CircleType = 'normal' | 'big'

type StyledProps = {
    type: CircleType
}

type HiddenProps = {
    reached?: boolean
    current: boolean
    direction: Direction
}

const CircleWrapper = styled.div<StyledProps & HiddenProps>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .message {
        position: absolute;
        right: ${({ direction }) => (direction === 'vertical' ? 'calc(100% + 10px)' : 'auto')};
        left: ${({ direction }) => (direction === 'vertical' ? 'auto' : 'auto')};
        top: ${({ direction }) => (direction === 'vertical' ? '0%' : 'auto')};
        bottom: ${({ direction }) => (direction === 'vertical' ? 'auto' : 'calc(100% + 10px)')};
    }

    .circle + .message {
        top: ${({ direction }) => (direction === 'vertical' ? '0%' : 'calc(100% + 10px)')};
        left: ${({ direction }) => (direction === 'vertical' ? 'calc(100% + 10px)' : 'auto')};
        right: ${({ direction }) => (direction === 'vertical' ? '100%' : 'auto')};
        bottom: auto;
    }

    .circle {
        min-width: ${({ type }) => (type === 'big' ? '30px' : '20px')};
        min-height: ${({ type }) => (type === 'big' ? '30px' : '20px')};
        background: ${({ reached, current, id }) =>
            current ? `var(--reallyBlue)` : reached ? Colors.green.main : Colors.grey.main};
        outline: 6px solid
            ${({ reached, current, id }) =>
                current ? Colors.blue.transparentAF : reached ? Colors.green.transparentAF : Colors.grey.transparentAF};
        margin: 6px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8em;
        font-weight: bold;
        cursor: pointer;
    }
`

export type CircleProps = StyledProps & {
    insideCircle?: ChildrenType
    title: string
    content?: ChildrenType
    hint?: string
    id: number
    onCircleClick?: (id: number) => void
}

const Circle = ({
    insideCircle,
    type,
    reached,
    hint,
    title,
    content,
    onCircleClick,
    current,
    id,
    direction,
}: CircleProps & HiddenProps) => {
    return (
        <CircleWrapper
            type={type}
            direction={direction}
            reached={reached}
            current={current}
            onClick={() => (onCircleClick ? onCircleClick(id) : null)}
        >
            <Message
                visible={!!hint}
                icon={null}
                type={reached ? 'info' : 'tip'}
                title={hint}
                width="fit-content"
                maxWidth="125px"
            />
            <div className="circle">{insideCircle}</div>
            <Message icon={null} type="tip" title={title} width="max-content" maxWidth="265px">
                {content}
            </Message>
        </CircleWrapper>
    )
}

export default Circle
