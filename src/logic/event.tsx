export const keyDown = (
    e: { which: any },
    setPositionx: any,
    setPositiony: any,
    positionx: any,
    positiony: any,
    fixed: any,
    setPresentMino: any,
    tetriMino: any
) => {
    switch (e.which) {
        //Enter
        case 13:
            tetriMino.rotateR()
            if (checkCrush(fixed, tetriMino.getMino(positionx, positiony))) {
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx + 1, positiony)
                    )
                ) {
                    setPositionx(positionx + 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 1, positiony)
                    )
                ) {
                    setPositionx(positionx - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 1, positiony)
                    )
                ) {
                    setPositionx(positionx - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx, positiony - 1)
                    )
                ) {
                    setPositionx(positiony - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx + 2, positiony)
                    )
                ) {
                    setPositionx(positionx + 2)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 2, positiony)
                    )
                ) {
                    setPositionx(positionx - 2)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx, positiony - 2)
                    )
                ) {
                    setPositionx(positiony - 2)
                    break
                }
                break
            }
            setPresentMino(tetriMino.getMino(positionx, positiony))
            break
        //Space
        case 32:
            tetriMino.rotateL()
            if (checkCrush(fixed, tetriMino.getMino(positionx, positiony))) {
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx + 1, positiony)
                    )
                ) {
                    setPositionx(positionx + 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 1, positiony)
                    )
                ) {
                    setPositionx(positionx - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 1, positiony)
                    )
                ) {
                    setPositionx(positionx - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx, positiony - 1)
                    )
                ) {
                    setPositionx(positiony - 1)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx + 2, positiony)
                    )
                ) {
                    setPositionx(positionx + 2)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx - 2, positiony)
                    )
                ) {
                    setPositionx(positionx - 2)
                    break
                }
                if (
                    !checkCrush(
                        fixed,
                        tetriMino.getMino(positionx, positiony - 2)
                    )
                ) {
                    setPositionx(positiony - 2)
                    break
                }
                break
            }
            setPresentMino(tetriMino.getMino(positionx, positiony))
            break
        //Right
        case 39:
        case 102:
            if (
                checkCrush(fixed, tetriMino.getMino(positionx + 1, positiony))
            ) {
                break
            }
            setPositionx(positionx + 1)
            break
        //Left
        case 37:
        case 100:
            if (
                checkCrush(fixed, tetriMino.getMino(positionx - 1, positiony))
            ) {
                break
            }
            setPositionx(positionx - 1)
            break
        //Down
        case 40:
        case 98:
            if (
                checkCrush(fixed, tetriMino.getMino(positionx, positiony + 1))
            ) {
                break
            }
            setPositiony(positiony + 1)
            break
        default:
            break
    }
}

export const checkCrush = (a: number[][], b: number[][]) => {
    let check = false
    for (let i = 0; i < a.length; i++) {
        if (!b[i]) {
            break
        }
        for (let j = 0; j < a[i].length; j++) {
            check = a[i][j] > 0 && b[i][j] > 0 ? true : false
            if (check) {
                return check
            }
        }
    }
    return check
}
export const merge = (a: number[][], b: number[][]) => {
    let newDisp = []
    for (let i = 0; i < a.length; i++) {
        let newLine = []
        if (a[i] === undefined) break
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] > 0) {
                newLine.push(a[i][j])
            } else if (b[i] && b[i][j] > 0) {
                newLine.push(b[i][j])
            } else {
                newLine.push(0)
            }
        }
        newDisp.push(newLine)
    }
    return newDisp
}
export const flashLine = (arrays: number[][]): (number[][] | number)[] => {
    let clearedAmount = 0
    for (let i = 1; i < arrays.length - 1; i++) {
        let isDelete = true
        for (let j = 1; j < arrays[i].length - 1; j++) {
            if (arrays[i][j] === 0) {
                isDelete = false
                break
            }
        }
        if (isDelete) {
            arrays.splice(i, 1, [9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9])
            clearedAmount++
        }
    }
    return [arrays, clearedAmount]
}

export const deleteLine = (arrays: number[][]) => {
    for (let i = 1; i < arrays.length - 1; i++) {
        let isDelete = false
        for (let j = 1; j < arrays[i].length - 1; j++) {
            if (arrays[i][j] === 8) {
                isDelete = true
                break
            }
        }
        if (isDelete) {
            arrays.splice(i, 1)
            arrays.splice(1, 0, [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9])
        }
    }
    return arrays
}

export const checkGameOver = (base: number[][]) => {
    if (0 < base[0][5] || base[0][6] || base[0][7] || base[0][7]) {
        return true
    }
    return false
}
