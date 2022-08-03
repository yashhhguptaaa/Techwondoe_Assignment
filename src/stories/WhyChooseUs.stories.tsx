/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WhyChooseUs } from './WhyChooseUs';


export default {
    title: 'Example/WhyChooseUs',
    component: WhyChooseUs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof WhyChooseUs>;

const Template: ComponentStory<typeof WhyChooseUs> = (args) => <WhyChooseUs {...args} />;

export const WhyChooseUsTemplateOne = Template.bind({});
WhyChooseUsTemplateOne.args = {
    title: "Highly experienced Team",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .'
};
