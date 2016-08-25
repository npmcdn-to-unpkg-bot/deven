import React, { Component } from 'react';
import './Result.styl';

export default class Result extends Component {
  render() {
    return (
      <div className="Result component">
        <div className="inner">
          <p className="title">{this.props.title}</p>
          <p className="url">{this.props.url}</p>
          <p className="description">{this.props.description}</p>
        </div>
        <div className="actions">
          <p>VOTE {this.props.votes}</p>
          <p>EDIT</p>
          <p>REPORT</p>
        </div>
        <div className="dateAdded">
          <p>{this.props.dateAdded}</p>
        </div>
      </div>
    )
  }
}
