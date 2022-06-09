import { Colors, IColors } from '@consts'
import { Button } from '@ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useModal from 'widgets/modal'

const PlateWrapper = styled.div<{ color?: keyof IColors }>`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    width: 100%;
    color: ${({ color }) => (color ? Colors[color].main : 'var(--text)')};
    border-radius: var(--brSemi);
    background: ${({ color }) => (color ? Colors[color].transparentAF : 'var(--almostTransparent)')};

    .title {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: var(--text);
    }

    .icon {
        color: ${({ color }) => (color ? Colors[color].main : 'var(--text)')};
        width: 45px;
        height: 45px;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: ${({ color }) => (color ? Colors[color].transparent : 'var(--almostTransparent)')};
        margin-right: 10px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`

export interface WhatsNewPlate {
    icon: ChildrenType
    title: string
    color?: keyof IColors
    visible?: boolean
    goTo?: string
}

const Plate = ({ icon, title, color, goTo, visible = true }: WhatsNewPlate) => {
    const { close } = useModal()
    return visible ? (
        <PlateWrapper color={color}>
            <div className="icon">{icon}</div>
            <span className="title">{title}</span>
            {!!goTo && (
                <Link to={goTo}>
                    <Button text="Перейти" onClick={close} background="var(--almostTransparent)" />
                </Link>
            )}
        </PlateWrapper>
    ) : null
}

export default Plate
