import React from 'react'
import { Mino } from '../../molecule/mino/Mino'
import './title.scss'

export interface TitleProps {
    structure: number[][]
    colorNum?: number
    locationX?: number
    locationY?: number
    onClick?: OnClick
}

interface OnClick {
    retry: () => void
    config: () => void
}

/**
 * Mino
 */
export const Title: React.FC<TitleProps> = (props) => {
    let mino = []
    let args: TitleProps = {
        structure: props.structure,
        colorNum: props.colorNum || 0,
        locationX: props.locationX || 0,
        locationY: props.locationY || 0
    }
    mino.push(<Mino {...args} />)
    return (
        <>
            <div className="title">
                <div className="span__title1">
                    <div {...{ onClick: props.onClick?.retry }}>START</div>
                    <div {...{ onClick: props.onClick?.config }}>CONFIG</div>
                </div>
                {mino}
            </div>
        </>
    )
}
