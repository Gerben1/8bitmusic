import R from 'ramda';

class Game {

  constructor(images) {
    console.log(images)
    this.imageCollection = 'hi';
  }

  createBoard(gridSize, images){
    var imageCollection = 'hi';
    let boardSize = gridSize * gridSize;
    let boardMaker = R.mapIndexed(({value, checked, picture}, id) => {
      return { id, value, checked, picture }
    });
    let board = boardMaker(R.times(this.initializer, boardSize));
    let started = false;
    return { started, board };
  }

  toggleCell(index, board){
    // let cell = board[index].value === 'on' ? 'off' : 'on';
    // board[index].value = cell;
    return board;
  }

  isOver(board){
    let amount = 0;
    board.forEach((cell) => {
      if(!cell.checked && cell.value === 'on'){
        amount += 1;
      }
    });
    return !amount;
  };

  initializer(n){

    return {
      value: 'on',
      checked: false,
      picture: (function(){ 



        return images[n] })()
    }
  }
}

export default Game;
