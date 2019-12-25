import React, { Component } from 'react';
import Card from './components/Cards';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    current_score: 0,
    high_score: 0,
    winning_score: 16,
    cards: []
  };

  scoreIncrement = () => {
    this.setState({ current_score: this.state.current_score + 1 })
  }


  endGame = () => {
    if (this.state.current_score > this.state.high_score) {
      this.state({ high_score: this.state.current_score }, function () {
        console.log(this.state.high_score)
      })
    }

    this.state.cards.forEach(card => {
      card.count = 0;
    });

    // Sets the current score back to zero.
    this.setState({ current_score: 0 });

    return true;

  }

  clickCount = id => {
    
    this.state.cards.find((a, b) => {

      if (a.id === id) {

        let scoreCount = cards[b].count;

        if (scoreCount === 0) {

          scoreCount = scoreCount + 1;

          this.scoreIncrement();
        }
        this.state.cards.sort(() => Math.random() - 0.5)

        return true;

      } else {

        this.endGame();
      }



    })
  }

  render() {
    return (
      <Wrapper>
        <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
        <div>
        {this.state.cards.map( cards =>
          <Card
            clickCount={this.clickCount}
            id={cards.pic_id}
            player={cards.player}
            image={cards.image}
          />
          )}
        </div>

      </Wrapper>
    );
  }
}

export default App;
