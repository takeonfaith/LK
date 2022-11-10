import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Error } from './index'

export default {
    title: 'Error',
    component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    size: '200px',
    children: 'Что-то пошло не так',
    text: 'А вот и я',
    // image
};


