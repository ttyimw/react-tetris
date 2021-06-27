import React from 'react'
import {Mino} from './Mino'

interface Parts {
    structure : number[][]
    colorNum? : number
    locationX?: number
    locationY?: number
}

export type GameOverProps = Parts[]

/**
 * Mino
 */
export const GGameOver: React.FC<GameOverProps> = (props) => {
    let mino=[]
    for(let i in props) {
        let args: Parts = {
            structure: props[i].structure,
            colorNum : props[i].colorNum  || 0,
            locationX: props[i].locationX || 0,
            locationY: props[i].locationY || 0
        }
        mino.push(<Mino {...args}/>)
    }
    return (
        <>
            <div className="gameover" style={{'position':'absolute', 'width': '100%','height':'100%','backgroundColor':'#8888ee44'}}>
                {mino}
            </div>
        </>
    )
}
