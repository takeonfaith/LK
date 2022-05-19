import { Colors, IColors } from '@consts'
import { contextMenuModel } from '@entities/context-menu'
import BlockWrapper from '@ui/block/styles'
import { Button } from '@ui/button'
import getShortStirng from '@utils/get-short-string'
import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import styled from 'styled-components'
import ContextContent from './context-content'
import Icon from './icon'

const PageLinkWrapper = styled(BlockWrapper)<{ color: string }>`
    position: relative;
    cursor: pointer;

    .new {
        position: absolute;
        top: 5px;
        right: -5px;
        border-radius: var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight);
        background: ${Colors.red.lighter};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${Colors.red.lighter}; */
    }

    .more-button {
        position: absolute;
        top: 5px;
        left: 5px;
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    &:hover {
        .more-button {
            opacity: 1;
            visibility: visible;
        }
    }

    .outside {
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: column;
        border-radius: var(--brSemi);
        align-items: center;
        justify-content: center;
        padding: 15px;

        &:hover .icon {
            box-shadow: 0 20px 110px 60px ${({ color }) => Colors[color as keyof IColors].main};
            transform: scale(1.1) translateY(20px);
        }

        &:hover b {
            opacity: 0;
            transform: scale(0.95);
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: center;
            color: var(--text);
            transition: 0.2s;
            height: 30px;
        }
    }
`

export interface PageLinkProps {
    icon: ChildrenType
    title: string
    color: string
    isNew?: boolean
}

const PageLink = (props: PageLinkProps) => {
    const { icon, title, color, isNew = false } = props
    return (
        <PageLinkWrapper
            padding="0"
            width="125px"
            height="135px"
            orientation="vertical"
            justifyContent="center"
            color={color}
        >
            <div className="outside">
                <Icon color={color}>{icon}</Icon>
                <b>{getShortStirng(title, 20)}</b>
            </div>
            <Button
                icon={<FiMoreVertical />}
                textColor={Colors[color as keyof IColors].main}
                className="more-button"
                background="transparent"
                onClick={(e) =>
                    contextMenuModel.events.open({
                        e,
                        height: 143,
                        content: <ContextContent {...props} />,
                    })
                }
            />
            {isNew && <span className="new">New</span>}
        </PageLinkWrapper>
    )
}

export default PageLink
