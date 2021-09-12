import React from 'react'
import { Mino } from '../../molecule/mino/Mino'
import './gameOver.scss'

interface Parts {
    structure: number[][]
    colorNum?: number
    locationX?: number
    locationY?: number
    onClick?: OnClick
}

interface OnClick {
    retry: () => void
    top: () => void
}

export type GameOverProps = Parts

/**
 * Mino
 */
export const GGameOver: React.FC<GameOverProps> = (props) => {
    let mino = []
    let args: Parts = {
        structure: props.structure,
        colorNum: props.colorNum || 0,
        locationX: props.locationX || 0,
        locationY: props.locationY || 0
    }
    mino.push(<Mino {...args} />)
    return (
        <>
            <div className="gameover">
                <div className="span__gameover1">
                    <div {...{ onClick: props.onClick?.retry }}>RETRY</div>
                    <div {...{ onClick: props.onClick?.top }}>&nbsp;TOP</div>
                </div>
                {mino}
            </div>
        </>
    )
}
