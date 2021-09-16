class TicTacToe {
  table = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  constructor() { }

  mark(row, column, val) {
    if (typeof row !== 'number' || typeof column !== 'number') {
      throw new Error("Column or Row is not a number!")
    }

    if (val !== "x" && val !== "o") {
      throw new Error("Invalid value to mark")
    }

    const squareToMark = this.table[row][column]

    if (squareToMark) {
      throw new Error(`Square ${row} - ${column} alredy is occuped`)
    }

    this.table[row][column] = val
    return this.table
  }

  check() {
    let xWin;
    let oWin;

    const diagonal = [];
    const secondDiagonal = [];

    this.table.forEach((row, ind, arr) => {
      if (!xWin || oWin) {
        xWin = row.every(everyX)
        oWin = row.every(everyO)
      }

      diagonal.push(row[ind])

      secondDiagonal.push(row[row.length - 1 - ind])
    })

    if (diagonal.every(everyX) || secondDiagonal.every(everyX)) {
      return 'x'
    }
    if (diagonal.every(everyO) || secondDiagonal.every(everyO)) {
      return '0'
    }

    if (xWin || oWin) {
      return xWin ? "x" : "o"
    }
  }
}
const game = new TicTacToe()

/* Normal */
// game.mark(0, 0, 'x')
// game.mark(0, 1, 'x')
// game.mark(0, 2, 'x')

/* Diagonal */
// game.mark(0, 0, 'x')
// game.mark(1, 1, 'x')
// game.mark(2, 2, 'x')

/* Second Diagonal */
// game.mark(0, 2, 'x')
// game.mark(1, 1, 'x')
// game.mark(2, 0, 'x')


function everyX(e) { return e === "x" }
function everyO(e) { return e === "o" }