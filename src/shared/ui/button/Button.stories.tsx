import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        width: {
            defaultValue: '200px',
            name: 'Ширина',
            type: 'string',
            description: 'Задает ширину кнопки'
        },
        text: {
            defaultValue: 'Кнопка',
            name: 'Лейбл',
            type: 'string',
            description: 'Задает текст кнопки'
        },
        background: {
            defaultValue: 'transparent',
            name: 'Фон',
            type: 'string',
            description: 'Задает цвет фона кнопки'
        },
        color: {
            defaultValue: '#000',
            name: 'Цвет текста',
            type: 'string',
            description: 'Задает цвет текста кнопки'
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});


