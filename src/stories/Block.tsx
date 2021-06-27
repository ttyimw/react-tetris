import React from 'react'
import './block.scss'

export interface BlockProps {
    colorNum? : number
    locationX?: number
    locationY?: number
}

const colorsArys: Array<any> = [
    [0, 0, 0],
    [250, 100, 100],
    [255, 215, 0],
    [123, 104, 238],
    [0, 191, 255],
    [173, 255, 47],
    [255, 140, 50],
    [250, 240, 220],
    [255, 200, 210],
    [150, 150, 150],
]

/**
 * Block
 */
export const Block: React.FC<BlockProps> = ({
    colorNum  = 0,
    locationX = 0,
    locationY = 0,
}) => {

    const _rgb = colorsArys[colorNum]
    const addCSS: React.CSSProperties = {
        backgroundColor  : 'rgb(' + (_rgb[0] - 10) + ',' + (_rgb[1] - 10) + ',' + (_rgb[2] - 10) + ')',
        borderTopColor   : 'rgb(' + (_rgb[0] - 60) + ',' + (_rgb[1] - 60) + ',' + (_rgb[2] - 60) + ')',
        borderRightColor : 'rgb(' + (_rgb[0] - 40) + ',' + (_rgb[1] - 40) + ',' + (_rgb[2] - 40) + ')',
        borderBottomColor: 'rgb(' + (_rgb[0] - 0)  + ',' + (_rgb[1] - 0)  + ',' + (_rgb[2] - 0)  + ')',
        borderLeftColor  : 'rgb(' + (_rgb[0] - 20) + ',' + (_rgb[1] - 20) + ',' + (_rgb[2] - 20) + ')',
        top : locationY * 30,
        left: locationX * 30,
    }

    return <div className="div__block1" style={{...addCSS }}></div>
}
