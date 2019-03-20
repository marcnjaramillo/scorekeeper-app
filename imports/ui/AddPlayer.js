import React, { Component } from 'react';

import {Players} from './../api/players';


class AddPlayer extends Component {

handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name"/>
        <button>Add Player</button>
      </form>
    )
  }
};

export default AddPlayer;