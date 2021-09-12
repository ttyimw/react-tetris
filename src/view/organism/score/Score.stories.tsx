import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Score, ScoreProps } from './Score'

export default {
    title: 'Organism/Score',
    component: Score
} as Meta

const Template: Story<ScoreProps> = (args) => <Score {...args} />
export const Stack1 = Template.bind({})
Stack1.args = {
    level: 100,
    score: 10000,
    locationX: 0,
    locationY: 0
}
