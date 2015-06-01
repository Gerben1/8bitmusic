import React from 'react';
import Board from './Board.jsx';
import R from 'ramda';

class Interface extends React.Component {

  constructor(props){
    super(props);
    let currentBoard = 0;
    let { gridSize } = this.props;
    let { started, board } = this.createBoard(this.props.gridSize, this.props.mediaCollection[currentBoard].images);
    this.state = { board, started, gridSize, currentBoard }
  }

  createBoard(gridSize, images){
    let boardSize = gridSize * gridSize;
    let boardMaker = R.mapIndexed(({value, checked, picture}, id) => {
      return { id, value, checked, picture }
    });


    let tempBoard = [];
    for (var I=0; I<boardSize; I++){
      tempBoard.push(new this.initializer(images[I])) ;
    }
    let board = boardMaker(tempBoard);
    let started = false;
    return { started, board };
  }

  changeBoard(){
    let newCurrentBoard = this.state.currentBoard+1;
    let board = this.createBoard(this.props.gridSize, this.props.mediaCollection[newCurrentBoard].images); 
    this.setState({currentBoard: newCurrentBoard, board: board.board})
  }

  toggleCell(index, board){
    // let cell = board[index].value === 'on' ? 'off' : 'on';
    // board[index].value = cell;
    return board;
  }

  initializer(image){
    return {
      value: 'on',
      checked: false,
      picture: image
    }
  }

  startGame(){
    let started = true;
    this.setState({started});
  }

  toggleState(index){
    let board = this.state.board;
    board = this.toggleCell(index, board);
    this.setState({board});
  }

  checkCell(index){
    let board = this.state.board;
    board = this.checkCell(index, board);;
    this.setState({board});
  }

  render(){
    let { started, board, currentBoard } = this.state;
    
    console.log(((this.props.mediaCollection.length -1) <= currentBoard))

    return (
    
      <section className="game">
        <audio src={ this.props.mediaCollection[this.state.currentBoard].sound } autoPlay loop> </audio>
        <Board boardType="control" handleClick={ this.toggleState.bind(this) } board={ board }></Board> 
        <button className="startButton" disabled={ ((this.props.mediaCollection.length -1) <= currentBoard) } onClick={ this.changeBoard.bind(this) }>Next</button>
      </section>
    )
  }
}

export default Interface;
