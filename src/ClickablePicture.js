import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    count: 0,
    image: "./img/persons/maxence-glasses.png",
    
  };

  handleImage = () => {
      if(this.state.count % 2 === 0){
        this.setState({image: this.state.image = "./img/persons/maxence.png"})
      } else {
        this.setState({image: this.state.image = "./img/persons/maxence-glasses.png"})
      }
      this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div >
        <img className="person-glasses" onClick={this.handleImage} src={this.state.image}/>
      </div>
    );
  }
}

export default ClickablePicture ;