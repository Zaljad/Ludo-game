const board = document.querySelector(".game_board")
const currentPlayer =document.querySelector('#current-player')
const enterBtn = document.querySelector('#enter-btn')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const dice = document.querySelector('#dice')

//enter button siting
if(enterBtn){
  enterBtn.addEventListener('click',()=>{
    window.location.href ='ludo_board.html'
  })
}

//players changing system
/*
let player1;
let player2;
if(input1){
  input1.addEventListener('input',()=>{
    player1= input1.value
  })
}
if(input2){
  input2.addEventListener('input',()=>{
    player2= input1.value
  })
}

let crtPlayer = player1;
forEach(()=>{
  if(crtPlayer===player1){
  crtPlayer=player2}
  else{
  crtPlayer=player1}
  currentPlayer.textContent=`${crtPlayer} Turn's`
}) */



 //board creation
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

for (let i = 2; i <= 5; i++) {
  const safeCell = document.createElement("div")
  safeCell.classList.add("board_cells", "yellow_safe")

  safeCell.style.gridRow = 6
  safeCell.style.gridColumn = i

  safeCell.style.backgroundColor = "#f3ad38"
  safeCell.innerText = ""

  board.appendChild(safeCell)
}

for (let i = 8; i <= 11; i++) {
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
yellowCenter.style.gridColumn='5/7'
board.appendChild(yellowCenter)

const redCenter = document.createElement('div')
redCenter.classList.add('red-center')
redCenter.style.gridRow='5/8'
redCenter.style.gridColumn='7/9'
board.appendChild(redCenter)


addDots=(row,col)=>{

    const dot = document.createElement('div')
    dot.classList.add('dice-dot')
    dot.style.gridRow=row
    dot.style.gridColumn=col
    dice.appendChild(dot)

}

rollDice=()=>{
  dice.innerHTML="";
  const num =Math.floor(Math.random()*6)+1

  if (num === 1){
    dice.style.gridTemplate = '1fr / 1fr';
    addDots(1,1)
  }
  else if (num === 2){
    dice.style.gridTemplate = 'repeat(2, 1fr) / repeat(2, 1fr)';
    addDots(1,1)
    addDots(2,2)
  }
  else if (num === 3){
    dice.style.gridTemplate = 'repeat(3, 1fr) / repeat(3, 1fr)';
    addDots(1,1)
    addDots(2,2)
    addDots(3,3)
  }
  else if (num === 4){
    dice.style.gridTemplate = 'repeat(2, 1fr) / repeat(2, 1fr)';
    addDots(1,1)
    addDots(1,2)
    addDots(2,1)
    addDots(2,2)

  }
  else if (num === 5){
    dice.style.gridTemplate = 'repeat(3, 1fr) / repeat(3, 1fr)';
    addDots(1,1)
    addDots(1,3)
    addDots(2,2)
    addDots(3,1)
    addDots(3,2)
  }
  else if (num === 6){
    dice.style.gridTemplate = 'repeat(2, 1fr) / repeat(3, 1fr)';
    addDots(1,1)
    addDots(1,2)
    addDots(1,3)
    addDots(2,1)
    addDots(2,2)
    addDots(2,3)
  }
}

dice.addEventListener('click',rollDice)
