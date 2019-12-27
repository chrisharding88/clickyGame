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
    cards: [],
    message: ""
  };


  nbaImageClick = (id, playerClicked) => {
    const cardOrder = this.state.cards;

    if (playerClicked) {
      cardOrder.forEach((img, i) =>{
        if (id !== img.id){
          // If the user clicked the same image
           cardOrder[i].playerClicked = false
        }
      })
      
      return this.setState({
        cards: cardOrder.sort(() => Math.random - 0.5),
        // Sets back to zero if the user clicks on the same image
        current_score:0,
        message:alert("You're incorrect! Start over again")
      })


    } else {
      // If the user clicked the different image
      cardOrder.forEach((img, i) => {
          cardOrder[i].playerClicked = true;     
      })

      // Increases the score when the user clicks on the a different card
      const scoreIncrement = this.state.current_score + 1

      // When the user's score beats the high score
      const newHighScore = this.state.current_score > this.state.high_score ? this.state.current_score : this.state.high_score;
  
      return this.setState ({
        cards: cardOrder.sort(() => Math.random() - 0.5),
        current_score: scoreIncrement,
        high_score: newHighScore
      });
    }

  

  }

  userWins = () =>{
    // If the user reaches the winning score
    // Then the message will pop up saying "YOU WIN"
    if (this.state.current_score === this.state.winning_score){
      this.setState({message: alert("YOU WIN!!!!")})
    }
  }




  render() {
    return (
      <Wrapper>
        <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
        <div>
        {this.state.cards.map( card =>
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
