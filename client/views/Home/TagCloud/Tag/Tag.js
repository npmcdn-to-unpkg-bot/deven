import React, { Component } from 'react';
import './Tag.styl';

export default class SearchTag extends Component {
  render() {
    return (
      <div className="SearchTag component"
        onClick={this.props.removeTag}
        onTouchStart={this.props.removeTag}
      >
        <p onClick={this.props.removeTag}
        onTouchStart={this.props.removeTag}>{this.props.tag}</p>
      </div>
    )
  }
}
