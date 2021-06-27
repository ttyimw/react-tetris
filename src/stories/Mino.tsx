import React from 'react'
import { Block } from './Block'

export interface MinoProps {
    structure : number[][]
    colorNum? : number
    locationX?: number
    locationY?: number
}

/**
 * Mino
 */
export const Mino: React.FC<MinoProps> = ({
    structure,
    colorNum  = 0,
    locationX = 0,
    locationY = 0,
}) => {

    let mino=[]
    let args = {
        colorNum : 0,
        locationX: 0,
        locationY: 0,
        key      : '',
    }

    for(let _x = 0; _x < structure.length; _x++) {
        for(let _y = 0; _y < structure[_x].length; _y++) {
            args.locationX = _y + locationX;
            args.locationY = _x + locationY;
            args.colorNum  = structure[_x][_y];
            args.key       = args.locationX + '_' + args.locationY
            args.colorNum  = colorNum && args.colorNum ? colorNum : args.colorNum;
            args.colorNum ? mino.push(<Block {...args} />) : null
        }
    }

    return (<>{mino}</>)
}
