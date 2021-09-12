import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Game, GameProps } from './Game'
import { Base, tetriMinos, PrevMinoFrame } from '../../assets/structure'

export default {
    title: 'Organism/Game',
    component: Game
} as Meta

const Template: Story<GameProps> = (args) => <Game {...args} />
export const Stack1 = Template.bind({})
Stack1.args = [
    {
        structure: Base,
        colorNum: 0,
        locationX: 1,
        locationY: 1
    },
    {
        structure: tetriMinos[1],
        colorNum: 2,
        locationX: 4,
        locationY: 10
    },
    {
        structure: tetriMinos[2],
        colorNum: 5,
        locationX: 8,
        locationY: 18
    },
    {
        structure: PrevMinoFrame,
        colorNum: 0,
        locationX: 14,
        locationY: 1
    },
    {
        structure: tetriMinos[5],
        colorNum: 0,
        locationX: 16,
        locationY: 3
    }
]
