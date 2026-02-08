const board = document.querySelector(".game_board")
const currentPlayer =document.querySelector('#current-player')
const enterBtn = document.querySelector('#enter-btn')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const dice = document.querySelector('#dice')
const redToken1 =document.querySelector('#red-token-1')
const redToken2 =document.querySelector('#red-token-2')
const yellowToken1 =document.querySelector('#yellow-token-1')
const yellowToken2 =document.querySelector('#yellow-token-2')

//enter button siting
if(enterBtn){
  enterBtn.addEventListener('click',()=>{
    window.location.href ='ludo_board.html'
  })
}

//players changing system

let player1;
let player2;


if(input1){
  input1.addEventListener('input',()=>{
    player1= input1.value
    updateTurnDisplay();
  })
}
if(input2){
  input2.addEventListener('input',()=>{
    player2= input2.value
    updateTurnDisplay();
  })
}

let crtPlayer = null;
updateTurnDisplay=()=>{
    if(crtPlayer===player1){
    crtPlayer=player2
    updateTurnDisplay();}
  else{
    crtPlayer=player1
    updateTurnDisplay();}
  currentPlayer.textContent=`${crtPlayer} Turn's`
}


changePlayer=()=>{
forEach(()=>{
  if(crtPlayer===player1){
    crtPlayer=player2
    updateTurnDisplay();}
  else{
    crtPlayer=player1
    updateTurnDisplay();}
})
}


 //board creation
for (let i = 1; i <= 44; i++) {
  const cell = document.createElement("div")
  cell.classList.add("board_cells")
  cell.setAttribute('id' ,`cell-${i}`)

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

  cell.innerText = i

  if (i===1 || i ===12 || i===23|| i===34) {
    cell.style.backgroundColor = "#008fec"
  }
  if (i === 17 ) {
    cell.style.backgroundColor = "#fc4d647c"
  }
  if (i === 40 ) {
    cell.style.backgroundColor = "#f3ad387c"
  }
  board.appendChild(cell)
}

for (let i = 2; i <= 4; i++) {
  const safeCell = document.createElement("div")
  safeCell.classList.add("board_cells", "yellow_safe")
  safeCell.setAttribute('id' ,`yellow-safe-cell-${i-1}`)

  safeCell.style.gridRow = 6
  safeCell.style.gridColumn = i

  safeCell.style.backgroundColor = "#f3ae387c"
  safeCell.innerText = i-1

  board.appendChild(safeCell)
}

for (let i = 9; i <= 11; i++) {
  const safeCell = document.createElement("div")
  safeCell.classList.add("board_cells", "red_safe")
  safeCell.setAttribute('id' ,`red-safe-cell-${i-8}`)

  safeCell.style.gridRow = 6
  safeCell.style.gridColumn = i

  safeCell.style.backgroundColor = "#fc4d647c"
  safeCell.innerText = i-8

  board.appendChild(safeCell)
}

const yellowCenter = document.createElement('div')
yellowCenter.setAttribute('id','yellow-center')
yellowCenter.style.backgroundColor = "#f3ae387c"
yellowCenter.style.gridRow='5/8'
yellowCenter.style.gridColumn='5/7'
board.appendChild(yellowCenter)

const redCenter = document.createElement('div')
redCenter.setAttribute('id','red-center')
redCenter.style.backgroundColor = "#fc4d647c"
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

let num ;
rollDice=()=>{
  dice.innerHTML="";
  num = Math.floor(Math.random()*6)+1

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
    addDots(3,3)
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

//
const rollingDice = dice.addEventListener('click',rollDice)

//players paths
const redPath=[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,'red-safe-cell-3','red-safe-cell-2','red-safe-cell-1','red-center']
const yellowPath=[40,41,42,43,44,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,'yellow-safe-cell-1','yellow-safe-cell-2','yellow-safe-cell-3','yellow-center']
console.log(redPath.length)

// tokens moving process
let targetId;
const moveToken=(token , pathStep)=>{
  if (typeof pathStep === 'number'){
    targetId = `cell-${pathStep}`;
  }
  else {
    console.log(pathStep)
    targetId = pathStep;
  }

  const targetCell =document.getElementById(targetId)
  targetCell.appendChild(token)

}

let redPos1 = -1;
redToken1.addEventListener('click',()=>{
  if (num === 6 && redPos1 === -1){
    redPos1=0;
    moveToken(redToken1,redPath[redPos1])
    num=0;
  }
  if( ( num > 0 && redPos1 >= 0)){

    if(redPos1+num < redPath.length){
    redPos1+= num;}

    moveToken(redToken1,redPath[redPos1])
    num=0;
    changePlayer()
  }
})

let redPos2 = -1;
redToken2.addEventListener('click',()=>{
  if (num === 6 && redPos2 === -1){
    redPos2=0;
    moveToken(redToken2,redPath[redPos2])
    num=0;
  }
  if( ( num > 0 && redPos2 >= 0)){

    if(redPos2+num < redPath.length){
    redPos2+= num;}

    moveToken(redToken2,redPath[redPos2])
    num=0;

  }
})

let yellowPos1 = -1;
yellowToken1.addEventListener('click',()=>{
  if (num === 6 && yellowPos1 === -1){
    yellowPos1=0;
    moveToken(yellowToken1,yellowPath[yellowPos1])
    num=0;
  }
  if( ( num > 0 && yellowPos1 >= 0)){

    if(yellowPos1+num < yellowPath.length){
    yellowPos1+= num;}

    moveToken(yellowToken1,yellowPath[yellowPos1])
    num=0;

  }
})

let yellowPos2 = -1;
yellowToken2.addEventListener('click',()=>{
  if (num === 6 && yellowPos2 === -1){
    yellowPos2=0;
    moveToken(yellowToken2,yellowPath[yellowPos2])
    num=0;
  }
  if( ( num > 0 && yellowPos2 >= 0)){

    if(yellowPos2+num < yellowPath.length){
    yellowPos2+= num;}

    moveToken(yellowToken2,yellowPath[yellowPos2])
    num=0;

  }
})


