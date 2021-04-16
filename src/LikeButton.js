import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="like-buttons">
        <button
          className="like-btns"
          style={{
            background: this.state.colors[Math.floor(Math.random() * 6)],
          }}
          onClick={this.handleIncrement}
        >
          <h4>
            {this.state.count} {this.state.count <= 1 ? 'likes' : 'like'}
          </h4>
        </button>
      </div>
    );
  }
}

export default LikeButton;
