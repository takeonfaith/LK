import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title, } from './index'

export default {
    title: 'Title',
    component: Title,
    argTypes: {
        width: {
            defaultValue: '100%',
            name: 'Ширина',
            type: 'string',
            description: 'Задает ширину тайтла'
        },
        text: {
            defaultValue: 'Тайтл',
            name: 'Лейбл',
            type: 'string',
            description: 'Задает текст тайтла'
        },
        required: {
            defaultValue: 'false',
            name: 'Обязательно',
            type: 'boolean',
            description: 'Добавляет дополнительный символ перед тайтлом'
        },
        size: {
            defaultValue: 1,
            name: 'Размер',
            control: { type: 'range', min: 1, max: 6 },
            description: 'Изменяет значимость заголовка',
        },
        visible: {
            defaultValue: true,
            name: 'Видимость',
            type: 'boolean',
            description: 'Скрывает тайтл'
        },
    }
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} children='Я тайтл'/>;

export const Primary = Template.bind({});
Primary.args = {};


