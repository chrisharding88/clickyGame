import React, { Component } from 'react';
import Card from './components/Cards';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import jsonCards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    current_score: 0,
    high_score: 0,
    winning_score: 16,
    cards: [],
    message: ""
  };
  
  componentDidMount() {
    this.setState({cards: jsonCards});
  }


  nbaImageClick = (id, playerClicked) => {
    const cardOrder = this.state.cards;

    if (playerClicked) {
      cardOrder.forEach((img, i) =>{
        if (id === img.id){
          // If the user clicked the same image
           cardOrder[i].playerClicked = true
        }
      })

       // When the user's score beats the high score
      const newHighScore = this.state.current_score > this.state.high_score ? this.state.current_score : this.state.high_score;
      return this.setState ({
        cards: cardOrder.sort(() => Math.random() - 0.5),
        // calls out the scoreIncrement() function in order to increase the current score 
        // whenever the user clicks a different card
        current_score: this.state.current_score + 1 ,
        high_score: newHighScore
      });


    } else {
      // If the user clicked the different image
      cardOrder.forEach((img, i) => {
          if (id !==img.id){
          cardOrder[i].playerClicked = false;
          }     
      });

    
      return this.setState({
        cards: cardOrder.sort(() => Math.random - 0.5),
        // Sets back to zero if the user clicks on the same image
        current_score:0,
        //message:alert("You're incorrect! Start over again")
      })

    }

  

  }

  userWins = () =>{
    // If the user reaches the winning score
    // Then the message will pop up saying "YOU WIN"
    if (this.state.current_score === this.state.winning_score){
      this.setState({message: alert("YOU WIN!!!!")})
    }
    // Resets the game after user wins
    return this.setState({
      current_score: 0
    })
  }




  render() {
    return (
      <Wrapper>
        <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
        <div>
        {this.state.cards.map( card =>
          <Card
            nbaImageClick={this.nbaImageClick}
            id={card.pic_id}
            player={card.player}
            image={card.image}
          />
          )}
        </div>

      </Wrapper>
    );
  }
}

export default App;
