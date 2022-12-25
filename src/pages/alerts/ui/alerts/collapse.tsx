import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React, { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'

const CollapseStyled = styled.div<{ collapsed: boolean; noChildren: boolean }>`
    width: 100%;
    opacity: ${({ noChildren }) => (noChildren ? '0.5' : '1')};
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

        .left {
            display: flex;
            align-items: center;
            svg {
                transform: rotate(${({ collapsed }) => (collapsed ? '0deg' : '180deg')});
            }
        }
    }

    .children {
        transition: 0.2s;

        img {
            max-width: 100%;
            height: unset;
        }
    }

    .children.close {
        opacity: 0;
        visibility: hidden;
        height: 0;
        pointer-events: none;
        transform: translateY(-30px);
    }

    .children.open {
        opacity: 1;
        visibility: visible;
        height: fit-content;
        pointer-events: all;
        transform: translateY(0px);
    }
`

type Props = {
    title: string
    children: React.ReactNode
    isCollapsed?: boolean
    initiallyCollapsed?: boolean
    sideText?: string
}

const Collapse = ({ title, children, initiallyCollapsed, sideText, isCollapsed }: Props) => {
    const [collapsed, setCollapsed] = useState(initiallyCollapsed ?? true)
    const noChildren = children === null || children === undefined

    const handleCollapse = () => setCollapsed((prev) => !prev)
    useEffect(() => {
        if (isCollapsed !== undefined) {
            setCollapsed(noChildren)
        }
    }, [isCollapsed, children])

    return (
        <CollapseStyled collapsed={collapsed} noChildren={noChildren}>
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
