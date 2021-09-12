import React from 'react'
import { Story, Meta } from '@storybook/react'
import { GGameOver, GameOverProps } from './GameOver'
import { GameOver } from '../../assets/structure'

export default {
    title: 'Organism/GameOver',
    component: GGameOver
} as Meta

const Template: Story<GameOverProps> = (args) => <GGameOver {...args} />
export const Stack1 = Template.bind({})
Stack1.args = {
    structure: GameOver,
    colorNum: 0,
    locationX: 1,
    locationY: 1
}
