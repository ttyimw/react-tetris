import React from 'react'
import { Game, GameProps } from '../../organism/game/Game'
import { Score, ScoreProps } from '../../organism/score/Score'

export interface FrameProps {
    gameProps: GameProps
    scoreProps: ScoreProps
}

/**
 * Mino
 */
export const Frame: React.FC<FrameProps> = ({ gameProps, scoreProps }) => {
    const gameArgs = gameProps
    const scoreArgs: ScoreProps = {
        score: scoreProps.score,
        level: scoreProps.level,
        locationX: scoreProps.locationX,
        locationY: scoreProps.locationY
    }
    return (
        <>
            <Game {...gameArgs} />
            <Score {...scoreArgs} />
        </>
    )
}
