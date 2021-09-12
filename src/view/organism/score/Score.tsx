import React from 'react'
import { Mino, MinoProps } from '../../molecule/mino/Mino'
import { ScoreFrame } from '../../assets/structure'

export interface ScoreProps {
    score: number
    level?: number
    locationX?: number
    locationY?: number
}

let scoreCSS: React.CSSProperties = {
    width: '170px',
    height: '170px',
    position: 'absolute',
    padding: '40px 0 0 40px',
    left: 0,
    top: 0,
    fontSize: '16px',
    color: '#eee'
}

const tableCSS: React.CSSProperties = {
    width: '160px',
    textAlign: 'left',
    position: 'relative'
}

const tdCSS: React.CSSProperties = {
    textAlign: 'right'
}

/**
 * Mino
 */
export const Score: React.FC<ScoreProps> = ({
    level = 0,
    score = 0,
    locationX = 0,
    locationY = 0
}) => {
    let _score = []
    let args: MinoProps = {
        structure: ScoreFrame,
        colorNum: 0,
        locationX: locationX,
        locationY: locationY
    }
    scoreCSS.left = locationX * 30
    scoreCSS.top = locationY * 30
    _score.push(<Mino {...args} />)

    return (
        <>
            <div style={{ ...scoreCSS }}>
                <table style={{ ...tableCSS }}>
                    <tr>
                        <th>LEVEL:</th>
                        <td style={{ ...tdCSS }}>{level}</td>
                    </tr>
                    <tr>
                        <th>SCORE:</th>
                        <td style={{ ...tdCSS }}>{score}</td>
                    </tr>
                </table>
            </div>
            {_score}
        </>
    )
}