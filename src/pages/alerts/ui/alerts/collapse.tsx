import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'

const CollapseStyled = styled.div`
    width: 100%;
    .top {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        justify-content: space-between;

        .title-wrapper {
            width: 50px;
        }
    }

    .children {
        transition: 0.2s;
    }

    .children.close {
        opacity: 0;
        visibility: hidden;
        height: 0;
        transform: translateY(-30px);
    }

    .children.open {
        opacity: 1;
        visibility: visible;
        height: fit-content;
        transform: translateY(0px);
    }
`

type Props = {
    title: string
    children: React.ReactNode
    initiallyCollapsed?: boolean
    sideText?: string
}

const Collapse = ({ title, children, initiallyCollapsed, sideText }: Props) => {
    const [collapsed, setCollapsed] = useState(initiallyCollapsed ?? true)

    const handleCollapse = () => setCollapsed((prev) => !prev)
    return (
        <CollapseStyled>
            <div className="top" onClick={handleCollapse}>
                <div className="left">
                    <Title size={4} align="left">
                        {title}
                    </Title>
                    <FiChevronDown />
                </div>
                <Subtext>{sideText}</Subtext>
            </div>

            {<div className={'children' + (collapsed ? ' close' : ' open')}>{children}</div>}
        </CollapseStyled>
    )
}

export default Collapse
