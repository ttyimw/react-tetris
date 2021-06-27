import React from 'react'
import {Mino} from './Mino'
import './gameOver.scss'

export interface TitleProps {
    structure : number[][]
    colorNum? : number
    locationX?: number
    locationY?: number
    onClick?  : OnClick
}

interface OnClick {
    retry: ()=>void,
    config: ()=>void,
}

/**
 * Mino
 */
export const Title: React.FC<TitleProps> = (props) => {
    let mino=[]
    let args: TitleProps = {
        structure: props.structure,
        colorNum : props.colorNum  || 0,
        locationX: props.locationX || 0,
        locationY: props.locationY || 0,
    }
    mino.push(<Mino {...args}/>)
    return (
        <>
            <div className="gameover" style={{'position':'absolute', 'width': '100%','height':'100%','backgroundColor':'#000'}}>
                <div className="span__gameover1">
                    <div {...{onClick: props.onClick?.retry}}>START</div>
                    <div {...{onClick: props.onClick?.config}}>CONFIG</div>
                </div>
                {mino}
            </div>
        </>
    )
}
