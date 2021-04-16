import React from "react";

class Carousel extends React.Component {
 
  state = {
    count: 0,
 };

  handleNextImg = () => {
   if(this.state.count < this.props.imgs.length - 1){
   this.setState({ count: this.state.count + 1 });
   }
  };

  handlePrevImg = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="carousel-box">
        <img className="carousel" src={this.props.imgs[this.state.count]}/>
        <div className="carousel-btn-div">
            <button className="btn btn-primary carousel-btns" onClick={this.handlePrevImg}>
              PREVIOUS
            </button>
            <button className="btn btn-primary carousel-btns" onClick={this.handleNextImg}>
              NEXT
            </button>
        </div>
      </div>
    );
  }
}

export default Carousel ;