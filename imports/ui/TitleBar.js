import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {

renderSubtitle = () => {
  if (this.props.subtitle) {
    return <h3 className="titlebar__subtitle">{this.props.subtitle}</h3>
  }
};

  render() {
    return (
      <div className="titlebar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    )
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleBar;