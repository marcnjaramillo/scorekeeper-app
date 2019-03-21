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
    let itemClassName = `item item--position-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place: {this.props.player.score} point(s).          
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={this.onDecrement}>-1</button>
            <button className="button button--round" onClick={this.onIncrement}>+1</button>
            <button className="button button--round" onClick={this.onDelete}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;