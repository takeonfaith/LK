import { IRoute } from '@app/routes/general-routes'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import React from 'react'
import { FiBook, FiMinusCircle, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../atoms/icon'
import { settingsModel } from '@entities/settings'
import { contextMenuModel } from '@entities/context-menu'

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

    const deleteElementContext = () => {
        if (settings) {
            const newPages = settings['settings-home-page'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-home-page',
                nameParam: 'pages',
                value: newPages.filter((item) => item !== id),
            })
            contextMenuModel.events.close()
        }
    }

    const addElementContext = () => {
        if (settings) {
            const newPages = settings['settings-home-page'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-home-page',
                nameParam: 'pages',
                value: [...newPages, id],
            })
            contextMenuModel.events.close()
        }
    }

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
                onClick={() => deleteElementContext()}
            />
            <Button
                text="Добавить"
                icon={<FiPlus />}
                //  onClick={() => open(<WhatsNew />)}
                width="100%"
                align="left"
                background="var(--schedule)"
                onClick={() => addElementContext()}
            />
            <Button
                text="Еще что-то"
                icon={<FiBook />}
                //  onClick={() => open(<WhatsNew />)}
                width="100%"
                align="left"
                background="var(--schedule)"
            />
        </ContextContentWrapper>
    )
}

export default ContextContent
