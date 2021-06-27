import React from 'react'
import {Game, GameProps} from './Game'
import {Score, ScoreProps} from './Score'

export interface FrameProps {
    gameProps : GameProps;
    scoreProps : ScoreProps;
}

/**
 * Mino
 */
export const Frame: React.FC<FrameProps> = ({
    gameProps,
    scoreProps,
}) => {

    const gameArgs = gameProps 
    const scoreArgs: ScoreProps = {
        score: scoreProps.score,
        level: scoreProps.level,
        locationX: scoreProps.locationX,
        locationY: scoreProps.locationY,
    }
    return (
        <>
            <Game {...gameArgs}/>
            <Score {...scoreArgs}/>
        </>
    )
}
