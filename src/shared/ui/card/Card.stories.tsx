import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Card } from './index'

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Я карточка',
    width: 'auto',
    background: 'purple',
};


