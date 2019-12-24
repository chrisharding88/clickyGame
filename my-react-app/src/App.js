import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Cards'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import cards from './cards.json'

class App extends Component {
  state={
    current_score: 0,
    high_score: 0,
    winning_score:16,
    cards: []
  };

  endGame = () =>{
    if (this.state.current_score > this.state.high_score){
      this.state({high_score: this.state.current_score}, function() {
        console.log(this.state.high_score)
      })
    }
  }

  clickCount = pic_id => {

  }

  render() {
    return (
     <Wrapper>
       <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
       {this.state.cards.map(Card =>( 
       <Card>
         clickCount={this.clickCount}
         id={cards.pic_id}
         player={cards.player}
         image={cards.image}
       </Card>
       ))}
     </Wrapper>
    );
  }
}

export default App;
