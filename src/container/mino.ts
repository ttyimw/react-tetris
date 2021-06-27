import { tetriMinos } from "../stories/structure"

export const tetriMino = (()=> {

    let followMino : number[][] = [[]]
    let presentMino: number[][] = [[]]
    
    const rotateR = ()=> {
        const colorNum = getColor(presentMino)
        const _presentMino = removeColor(presentMino)
        const size = presentMino[0].length
        let newMino: number[][] = JSON.parse(JSON.stringify((new Array(size)).fill((new Array(size)).fill(0))))
        _presentMino.map((line, rowNum)=>{
            _presentMino[rowNum].map((ary, order)=>{
                newMino[rowNum][order] = _presentMino[size - 1 - order][rowNum]
            })
        })
        presentMino = setColor(newMino, colorNum)
    }
    const rotateL = ()=> {
        const colorNum = getColor(presentMino)
        const _presentMino = removeColor(presentMino)
        const size = presentMino[0].length
        let newMino: number[][]=[[]]
        newMino=JSON.parse(JSON.stringify((new Array(size)).fill((new Array(size)).fill(0))))
        _presentMino.map((line, rowNum)=> {
            _presentMino[rowNum].map((ary, order)=>{
                newMino[rowNum][order] = _presentMino[order][size - 1 - rowNum]
            })
        })
        presentMino = setColor(newMino, colorNum)
    }
    
    const setColor = (mino: number[][], colorNum: number) => {
        mino.map((line, rowNum)=> {
            line.map((ary, order)=>{
                line[order] = line[order] ? colorNum : line[order] 
            })
        })
        return mino
    }
    
    const getColor = (mino: number[][]): number => {
        let colorNum = 0
        mino.map((line, rowNum)=> {
            line.map((ary, order)=>{
                if(ary) {
                    colorNum = ary
                }
            })
        })
        return colorNum
    }

    const removeColor = (mino: number[][]): number[][] => {
        mino.map((line, rowNum)=> {
            line.map((ary, order)=>{
                if(ary) {
                    ary = 1
                }
            })
        })
        return mino
    }

    return {
        rotateR: ()=> {
            rotateR()
            return this
        },
        rotateL: ()=> {
            rotateL()
            return this
        },
        reset: (
            presentMinoOrder = Math.floor(Math.random() * 7), 
            followMinoOrder  = Math.floor(Math.random() * 7),
            presentColorNum  = Math.floor(Math.random() * 7) + 1,
            followColorNum   = Math.floor(Math.random() * 7) + 1,
        ) => {
            presentMino = [...tetriMinos[presentMinoOrder]]
            followMino  = [...tetriMinos[followMinoOrder]]
            presentMino = setColor(presentMino, presentColorNum)
            followMino  = setColor(followMino, followColorNum)
            return this
        },
        shift: (
            followMinoOrder  = Math.floor(Math.random() * 7),
            followColorNum   = Math.floor(Math.random() * 7) + 1,
        ) => {
            presentMino = [...followMino]
            followMino  = [...tetriMinos[followMinoOrder]]
            followMino  = setColor(followMino, followColorNum)
            return this
        },
        getMino: (locationx = 0, locationy = 0) => {
            let newMino = [...presentMino]
            for(let i = 0; i < locationy; i++) {
                newMino = [[0,0,0]].concat(newMino)
            }
            for(let j = 0; j < locationx; j++) {
                newMino = newMino.map(d => [0].concat(d))
            }
            return newMino
        },
        getPrevMino:(locationx = 0, locationy = 0)=>{
            let newMino = [...followMino]
            for(let i = 0; i < locationy; i++){
                newMino = [[0,0,0]].concat(newMino)
            }
            for(let j = 0; j < locationx; j++){
                newMino = newMino.map(d=>[0].concat(d))
            }
            return newMino
        }
    }
})()
