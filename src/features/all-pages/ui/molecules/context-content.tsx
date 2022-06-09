import { IRoute } from '@app/routes/general-routes'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import React from 'react'
import { FiMinusCircle } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../atoms/icon'

const ContextContentWrapper = styled.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;

        span {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            font-size: 0.8em;
            font-weight: 500;
        }
    }
`

const ContextContent = (props: IRoute) => {
    const { icon, title, color } = props

    return (
        <ContextContentWrapper>
            <div className="top">
                <Icon color={color} size={22}>
                    {icon}
                </Icon>
                <span>{title}</span>
            </div>
            <Divider />
            <Button
                text="Убрать"
                icon={<FiMinusCircle />}
                //  onClick={() => open(<WhatsNew />)}
                width="100%"
                align="left"
                background="var(--schedule)"
            />
        </ContextContentWrapper>
    )
}

export default ContextContent
