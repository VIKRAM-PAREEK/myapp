import React, { Component } from 'react';
import './App.css';
class App extends Component{

  constructor(){
    super();

    this.state={
      turn: 'X',
      matrix: Array(9).fill(''),
      totalMoves: 0,
      gameEnded: false,
    }
  }
   

  clicked(event){
    if(this.state.gameEnded)return; //for disabling moves after a result is achieved
    
    //storing click events as player moves
    if(this.state.matrix[event.target.dataset.square] === ''){
      this.state.matrix[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.state.turn = this.state.turn==='X'?'O':'X';
      this.state.matrix=this.state.matrix;
      this.state.totalMoves++;
    }
    var result = this.checkWinner(); //storing the winner result
    if(result === 'X'){
      this.setState({
        winner: 'WINNER PLAYER "X"',
        gameEnded: true,
      });
    } else if(result === 'O'){
      this.setState({
        winner: 'WINNER PLAYER "O"',
        gameEnded: true,
      });
    } else if(result==='N'){
      this.setState({
        winner: 'Well played both it is a draw',
        gameEnded: true,
      });
    }
    
  }
    checkWinner(){
      var winmoves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      var board = this.state.matrix;
      var tot = this.state.totalMoves;
      //WINNING CONDITION
      for(let i=0;i<winmoves.length;i++){
        if(board[winmoves[i][0]] === board[winmoves[i][1]] && board[winmoves[i][1]] === board[winmoves[i][2]]){
          return board[winmoves[i][0]];
        }
        //DRAW CONDITION
        if(tot === 9){
          return 'N';
        }  
      }
      
    }

  render(){

  return (
      <div id="game">
          <h1>LET'S TIC TAC TOE</h1>
          <div id="player">
            <h3 id="p1">Player 1: X </h3>
            <h3 id="p2">Player 2: O</h3>
          </div>
          <div id="gameresult">{this.state.winner}</div>
          <br/>
      <div id="board" align="center" onClick={(e)=>this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
          
      </div>
      </div>
      );
}
}
export default App;
