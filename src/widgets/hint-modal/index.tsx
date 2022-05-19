import { Button } from '@ui/button'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

const HintModalWrapper = styled.div<{ left: number; top: number }>`
    left: ${({ left }) => left + 'px'};
    top: ${({ top }) => top + 'px'};
    padding: 10px;
    background: var(--reallyBlue);
    color: #fff;
    border-radius: var(--brLight);
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0 0 300px var(--reallyBlue);
    /* position:ab ; */

    .content {
        position: relative;
        width: 100%;

        &::before {
            content: '';
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            background: var(--reallyBlue);
            position: absolute;
            top: 5px;
            left: -20px;
            border-radius: 3px;
            z-index: -1;
        }
    }
`

interface Props {
    title?: string
}

const HintModal = ({ title = 'Подсказка' }: Props) => {
    return (
        <HintModalWrapper left={0} top={0}>
            <Title align="left" width="100%" bottomGap size={5}>
                {title}
            </Title>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio ex provident molestias perspiciatis
                ullam nulla praesentium ratione dicta iure, neque, commodi doloribus? Sequi placeat deleniti recusandae
                necessitatibus deserunt neque!
            </div>
            <Button align="right" background="#ffffff10" text="Понятно!" textColor="#fff" />
        </HintModalWrapper>
    )
}

export default HintModal
