import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Title, TitleProps } from './Title'
import {_Title} from './structure'

export default {
    title: 'Organism/Title',
    component: Title
} as Meta

const Template: Story<TitleProps> = (args) => <Title {...args} />
export const Stack1 = Template.bind({})
Stack1.args = {
    structure: _Title,
    colorNum : 5,
    locationX: 1,
    locationY: 1,
}
