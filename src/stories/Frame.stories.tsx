import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Frame, FrameProps } from './Frame'
import { Base, tetriMinos, PrevMinoFrame } from './structure'

export default {
    title: 'Template/Frame',
    component: Frame
} as Meta

const Template: Story<FrameProps> = (args) => <Frame {...args} />
export const Stack1 = Template.bind({})
Stack1.args = {
    gameProps: [{
        structure: Base,
        colorNum: 0,
        locationX: 1,
        locationY: 1
    },{
        structure: tetriMinos[1],
        colorNum: 2,
        locationX: 4,
        locationY: 10
    },{
        structure: tetriMinos[2],
        colorNum: 5,
        locationX: 8,
        locationY: 18
    },{
        structure: PrevMinoFrame,
        colorNum: 0,
        locationX: 14,
        locationY: 1
    },{
        structure: tetriMinos[5],
        colorNum: 0,
        locationX: 16,
        locationY: 3
    }],
    scoreProps: {
        score:10000,
        level:10,
        locationX: 14,
        locationY: 16,
    },
}