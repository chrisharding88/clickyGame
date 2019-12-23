import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import nbaCard from './components/Cards'
import Header from './components/header'
import Wrapper from './components/wrapper'
import cards from './cards.json'

class App extends Component {
  state = {
    current_score: 0,
    high_score: 0,
    winning_score:16,
    cards: []
  };
  render() {
    return (
     <Wrapper>
       <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
       {this.state.cards.map(nbaCard =>( 
       <Cards>
         clickCount={this.clickCount}
         id={cards.pic_id}
         player={cards.player}
         image={cards.image}
       </Cards>
       ))}
     </Wrapper>
    );
  }
}

export default App;
