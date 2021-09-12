import React from 'react'
import './block.scss'

export interface BlockProps {
    colorNum?: number
    locationX?: number
    locationY?: number
}

/**
 * Block
 */
export const Block: React.FC<BlockProps> = ({
    colorNum = 0,
    locationX = 0,
    locationY = 0
}) => {
    const addCSS: React.CSSProperties = {
        top: locationY * 30,
        left: locationX * 30
    }
    return (
        <div
            className={'div__block1 color' + colorNum}
            style={{ ...addCSS }}
        ></div>
    )
}
