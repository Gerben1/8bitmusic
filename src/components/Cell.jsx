import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class GameBoardCell extends React.Component {

  render(){
    let cellState = this.props.state;
    let classes = ['cell', `cell-is-${cellState.checked ? 'checked' : 'unchecked'}`, `cell-is-${cellState.value}`].join(' ');
    let audio = null;
    let src = null;

    if (src) {
    	audio= <audio src={ src } autoPlay ></audio>
    }

    if (cellState.value=="on" ){
    
      return (

        <button className={classes} style={{backgroundImage: 'url(' + cellState.picture + ')', backgroundSize: '100% 100%'}} onClick={this.props.handleClick.bind(this, cellState) }>
        {audio} 
        </button>

    )}

    else { 

      return (

        <button className={classes} onClick={this.props.handleClick.bind(this, cellState) }>
        {audio} 
        </button>
        
    )}

  }
}

export default GameBoardCell;
