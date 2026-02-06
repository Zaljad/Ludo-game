const board = document.querySelector(".game_board")
const currentPlayer =document.querySelector('#current-player')

for (let i = 1; i <= 44; i++) {
  const cell = document.createElement("div")
  cell.classList.add("board_cells")

  let row, col
  //top row
  if (i <= 12) {
    row = 1
    col = i
  }
  //right col
   else if (i <= 22) {
    row = i - 11
    col = 12
  }
  // bottom row
  else if (i <= 34) {
    row = 12
    col = 12 - (i - 23)
  }
  //lift col
  else {
    row = 11 - (i - 35)
    col = 1
  }

  cell.style.gridRow = row
  cell.style.gridColumn = col

  cell.innerText = ''
  if (i===1 || i ===12 || i===23|| i===34) {
    cell.style.backgroundColor = "#008fec"
  }
  if (i === 17 ) {
    cell.style.backgroundColor = "#fc4d64"
  }
  if (i === 40 ) {
    cell.style.backgroundColor = "#f3ad38"
  }
  board.appendChild(cell)
}

for (let i = 2; i <= 6; i++) {
  const safeCell = document.createElement("div")
  safeCell.classList.add("board_cells", "yellow_safe")

  safeCell.style.gridRow = 6
  safeCell.style.gridColumn = i

  safeCell.style.backgroundColor = "#f3ad38"
  safeCell.innerText = ""

  board.appendChild(safeCell)
}

for (let i = 7; i <= 11; i++) {
  const safeCell = document.createElement("div")
  safeCell.classList.add("board_cells", "red_safe")

  safeCell.style.gridRow = 6
  safeCell.style.gridColumn = i

  safeCell.style.backgroundColor = "#fc4d64"
  safeCell.innerText = ""

  board.appendChild(safeCell)
}

const yellowCenter = document.createElement('div')
yellowCenter.classList.add('yellow-center')
yellowCenter.style.gridRow='5/8'
yellowCenter.style.gridColumn='6/7'
board.appendChild(yellowCenter)

const redCenter = document.createElement('div')
redCenter.classList.add('red-center')
redCenter.style.gridRow='5/8'
redCenter.style.gridColumn='7/8'
board.appendChild(redCenter)


/* const enterBtn = document.querySelector('#enter-btn')
enterBtn.addEventListener('click',()=>{
  window.location.href = "ludo_board.html"
}) */
