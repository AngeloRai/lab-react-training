import React from 'react';

class Dice extends React.Component {
  state = {
    count: 0,
    image: '/img/dice3.png',
    images: [
      './img/dice1.png',
      './img/dice2.png',
      './img/dice3.png',
      './img/dice4.png',
      './img/dice5.png',
      './img/dice6.png', 
    ],
  };

  handleDice = () => {
    this.setState({image: this.state.image = "./img/dice-empty.png"})
    setTimeout(() => { 
        this.setState({ image: (this.state.image = this.state.images[Math.floor(Math.random() * 6)])});
         }, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="person-glasses"
          onClick={this.handleDice}
          src={this.state.image}
        />
      </div>
    );
  }
}

export default Dice;
