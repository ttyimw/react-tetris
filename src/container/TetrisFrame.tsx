import React, { FC, useRef, useState, useEffect } from 'react'
import {Base, GameOver, PrevMinoFrame} from '../stories/structure'
import {Frame, FrameProps} from '../stories/Frame'
import { keyDown, merge, checkCrush, flashLine, deleteLine, checkGameOver} from './event'
import {tetriMino} from './mino'
import './tetrisFrame.scss'
const offset = {x:2, y:2}
let timeout:any
export const TetrisFrame: FC = ()=>{
    const [presentMino, setPresentMino] = useState([[0]])
    const [prevMino,    setPrevMino]    =useState([[0]])
    const [fixed,       setFixed]       = useState(Base)
    const [positionx, setPositionx] = useState(4)
    const [positiony, setPositiony] = useState(0)
    const [gameover, setGameover]   = useState(true)
    const [moment, setMoment] = useState(false)
    const [action, setAction] = useState(false)
    const [score,  setScore]  = useState(0)
    const [level,  setLevel]  = useState(1)

    const inputRef = useRef<HTMLInputElement>(null);
    const reset=()=>{
        setPositionx(4)
        setPositiony(0)
        setMoment(!moment)
        setGameover(false)
        setScore(0)
        setLevel(1)
        setFixed(Base)
        tetriMino.reset()
        setPrevMino(tetriMino.getPrevMino(2,2))
        setPresentMino(tetriMino.getMino(4,0))
    }

    //initial
    useEffect(()=>{
        inputRef?.current?.focus();
        tetriMino.reset()
        setPrevMino(tetriMino.getPrevMino(2,2))
        setPresentMino(tetriMino.getMino(4,0))
    },[])

    //fall
    useEffect(()=>{
        timeout = setTimeout(()=>{
            setMoment(!moment)
        },1000 / level)
            
        
        if(checkCrush(fixed, tetriMino.getMino(positionx, positiony + 1))) {
            let merged: any = merge(fixed, tetriMino.getMino(positionx, positiony))
            merged = flashLine(merged)
            setFixed(merged[0])
            tetriMino.shift()
            
            //deleteLine
            if(merged[1]){
                const newScore = score + ((1000 + level) * (level ** 2) * (merged[1] ** 2))
                setScore(newScore)
                if((level ** 2) * 10000 < newScore) {
                    setLevel(level + 1)
                }
                setAction(!action)
            }
            if(checkGameOver(fixed)) {
                clearTimeout(timeout)
                setGameover(true)
                return
            }

            setPositiony(0)
            setPositionx(4)
            // setPresentMino(tetriMino.getMino(4,0))
            setPrevMino(tetriMino.getPrevMino(2,2))
            return
        }

        setPositiony(positiony + 1)
    },[moment])

    //deleteLine
    useEffect(()=>{
        setTimeout(()=>{
            const _base=JSON.parse(JSON.stringify(fixed))
            setFixed(deleteLine(_base))
        },250 / level)
    },[action])

    //minoMoved
    useEffect(()=>{
        setPresentMino(tetriMino.getMino(positionx, positiony))
    },[positionx, positiony])
    
    //keyDown
    const keyDownEvent = (e: { which: any }) => {
        keyDown(
            e, 
            setPositionx, 
            setPositiony, 
            positionx, 
            positiony,
            fixed, 
            setPresentMino,
            tetriMino
        )
    }

    //display
    let frameArgs: FrameProps = {
        gameProps : [{
            structure: fixed,
            colorNum: 0,
            locationX: 0 + offset.x,
            locationY: 0 + offset.y
        },{
            structure:presentMino,
            colorNum: 0,
            locationX: offset.x,
            locationY: offset.y,
        },{
            structure:PrevMinoFrame,
            colorNum: 0,
            locationX: 13 + offset.x,
            locationY: 0 + offset.y,
        },{
            structure:prevMino,
            colorNum: 0,
            locationX: 13 + offset.x,
            locationY: 0 + offset.y,
        },
        // {
        //     structure:GameOver,
        //     colorNum: 0,
        //     locationX: 0,
        //     locationY: 0,
        // }
        ],
        scoreProps: {
            score: score,
            level: level,
            locationX:13 + offset.x,
            locationY:15 + offset.y,
        }
    }

    return (
        <div ref={inputRef} className="div__tetrisFrame1" onKeyDown={keyDownEvent} tabIndex={0}>
            <Frame {...frameArgs} />
        </div>
    )
}
