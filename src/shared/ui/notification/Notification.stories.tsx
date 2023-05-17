import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Notification } from './index'

export default {
    title: 'Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
