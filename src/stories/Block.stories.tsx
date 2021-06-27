import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Block, BlockProps } from './Block'

export default {
    title: 'Atom/Block',
    component: Block
} as Meta

const Template: Story<BlockProps> = (args) => <Block {...args} />

export const Red = Template.bind({})
Red.args = {
    colorNum: 1,
    locationX: 1,
    locationY: 1
}

export const Yellow = Template.bind({})
Yellow.args = {
    colorNum: 2,
    locationX: 1,
    locationY: 1
}

export const Purple = Template.bind({})
Purple.args = {
    colorNum: 3,
    locationX: 1,
    locationY: 1
}

export const Blue = Template.bind({})
Blue.args = {
    colorNum: 4,
    locationX: 1,
    locationY: 1
}

export const Green = Template.bind({})
Green.args = {
    colorNum: 5,
    locationX: 1,
    locationY: 1
}

export const Orange = Template.bind({})
Orange.args = {
    colorNum: 6,
    locationX: 1,
    locationY: 1
}

export const Linen = Template.bind({})
Linen.args = {
    colorNum: 7,
    locationX: 1,
    locationY: 1
}

export const Pink = Template.bind({})
Pink.args = {
    colorNum: 8,
    locationX: 1,
    locationY: 1
}

export const Gray = Template.bind({})
Gray.args = {
    colorNum: 9,
    locationX: 1,
    locationY: 1
}