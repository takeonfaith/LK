import { Colors, IColors } from '@shared/constants/consts'
import { Button } from '@ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useModal from 'widgets/modal'

const PlateWrapper = styled.div<{ color?: keyof IColors }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({ color }) => (color ? Colors[color].main : 'var(--text)')};
    border-radius: var(--brLight);

    .title {
        height: 40px;
        font-weight: 700;
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
        width: 100%;
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
        background: var(--almostTransparent);

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
                    <Button text="Перейти" onClick={close} background="var(--almostTransparent)" width="100%" />
                </Link>
            )}
        </PlateWrapper>
    ) : null
}

export default Plate
