import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './index'

export default {
    title: 'Logo',
    component: Logo,
    argTypes: {
        short: {
            defaultValue: 'false',
            name: 'Полное название',
            type: 'boolean',
            description: 'Показывает полное логотип с/без текст(ом/a)'
        }
    }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};


