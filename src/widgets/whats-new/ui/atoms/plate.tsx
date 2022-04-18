import { Colors, IColors } from '@consts'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

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
}

const Plate = ({ icon, title, color, visible = true }: WhatsNewPlate) => {
    return visible ? (
        <PlateWrapper color={color as string}>
            <div className="icon">{icon}</div>
            <span className="title">{title}</span>
        </PlateWrapper>
    ) : null
}

export default Plate
