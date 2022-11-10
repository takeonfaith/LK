import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Block } from './index'

export default {
    title: 'Block',
    component: Block,
    argTypes: {
        children: {
            defaultValue: 'Я компонент, который появится после ленивой загрузки :)',
            name: 'Лейбл',
            type: 'string',
            description: 'Компонент который будет показан после загрузки'
        },
        loading: {
            defaultValue: 'true',
            name: 'Загрузка',
            type: 'boolean',
            description: 'Указывывает на отсутствие загрузки'
        },
        skeleton: {
            defaultValue: <h1>loading...</h1>,
            name: 'Загрузка',
            // type: "string",
            description: 'Указывывает на компонент, который будет отображаться, пока идет загрузка'
        }
    }
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};


