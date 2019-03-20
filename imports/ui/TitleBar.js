import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {

renderSubtitle = () => {
  if (this.props.subtitle) {
    <h3>{this.props.subtitle}</h3>
  }
};

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    )
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleBar;