import React, { Component } from 'react';
import Card from './components/Cards';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import jsonCards from './cards.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_score: 0,
      high_score: 0,
      winning_score: 16,
      cards: [],
      message: "",
      imageClicked: []
    };

    this.imageCheck = this.imageCheck.bind(this);
  }
  

  //Grabs the cards from JSON
  componentDidMount() {
    this.setState({cards: jsonCards});
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

  imageCheck = (id) => {

    let cardsOrder = this.state.cards
    const newHighScore = this.state.current_score > this.state.high_score ? this.state.current_score : this.state.high_score;

    
    if(this.indexCheck(id)) {
      console.log("you lose");
      // Reset and scramble the images
      this.setState({
        cards: this.shuffleCards(cardsOrder),
        current_score: 0
      })
    } else {

      this.setState({
        imageClicked: [...this.state.imageClicked, id],
        cards:this.shuffleCards(cardsOrder),
        current_score: this.state.current_score + 1,
        high_score: newHighScore
      });

      // update the score
    }

    console.log(this.state.imageClicked)
  }

  indexCheck = (id) => {
    return this.state.imageClicked.some(x => x === id);
  }

  shuffleCards = (x) => {
    for (let y = x.length - 1; y > 0; y--){
      const z = Math.floor(Math.random() * ( y + 1 ));
      [x[y], x[z]] = [x[z], x[y]];
    }
    return x
  }






  render() {
    return (
      <Wrapper>
        <Header current_score={this.state.current_score} high_score={this.state.high_score}></Header>
        <div>
        {this.state.cards.map( card =>
          <Card
            key={card.pic_id}
            onImageClick={() => this.imageCheck(card.pic_id)}
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
