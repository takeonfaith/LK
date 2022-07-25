import { IRoute } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { settingsModel } from '@entities/settings'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import { FiMinusCircle, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../atoms/icon'
import React from 'react'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import addPageToHome from '@features/all-pages/lib/add-page-to-home'

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
    const { id, icon, title, color } = props
    const { settings } = settingsModel.selectors.useSettings()
    const isAdded = (settings['settings-home-page'].property.pages as string[]).find((el) => el === id)

    return (
        <ContextContentWrapper>
            <div className="top">
                <Icon color={color} size={22}>
                    {icon}
                </Icon>
                <span>{title}</span>
            </div>
            <Divider />
            {isAdded ? (
                <Button
                    text="Убрать с главной"
                    icon={<FiMinusCircle />}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={() => {
                        deletePageFromHome(id, settings)
                        contextMenuModel.events.close()
                    }}
                />
            ) : (
                <Button
                    text="Добавить на главную"
                    icon={<FiPlus />}
                    //  onClick={() => open(<WhatsNew />)}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={() => {
                        addPageToHome(id, settings)
                        contextMenuModel.events.close()
                    }}
                />
            )}
        </ContextContentWrapper>
    )
}

export default ContextContent
