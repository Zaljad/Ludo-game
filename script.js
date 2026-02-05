
const board = document.querySelector('.game_board')

for(let i =1; i<= 40; i++){
const  cell= document.createElement('div')
cell.classList.add('board_cells')

  let row, col;

  if(i<=11){
    row =1; col =i;
  }
  else if(i<=21){
    row =i -10; col =11;
  }
  else if(i <=31){
    row =11; col=11-(i-21);
  }
  else{
    row = 11 -(i -31); col =1}



cell.style.gridRow = row;
cell. style.gridColumn = col;

cell.innerText=i;
if(i%10 ===1) {
  cell.style.backgroundColor="#00ffff";}
board.appendChild(cell);
}

/* const enterBtn = document.querySelector('#enter-btn')
enterBtn.addEventListener('click',()=>{
  window.location.href = "ludo_board.html"
}) */

