import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

class Player extends Component {

  onIncrement = () => {
    Players.update(this.props.player._id, {$inc: {score: 1}})
  };

  onDecrement = () => {
    Players.update(this.props.player._id, {$inc: {score: -1}})
  };

  onDelete = () => {
    Players.remove(this.props.player._id)
  };

  render() {
    return (
      <p key={this.props.player._id}>
      {this.props.player.name} has {this.props.player.score} point(s).
      <button onClick={this.onIncrement}>+1</button>
      <button onClick={this.onDecrement}>-1</button>
      <button onClick={this.onDelete}>X</button>
    </p>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;