import React from 'react'
import {Mino} from './Mino'

interface Parts {
    structure : number[][]
    colorNum? : number
    locationX?: number
    locationY?: number
}

export type GameProps = Parts[]

/**
 * Mino
 */
export const Game: React.FC<GameProps> = (props) => {
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
    return (<>{mino}</>)
}
