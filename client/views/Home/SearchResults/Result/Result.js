import React, { Component } from 'react';
import './Result.styl';

export default class Result extends Component {
  render() {
    const loggedIn = (this.props.loggedIn) ? 'logged-in' : 'logged-out';
    return (
      <div className="Result component">
        <div className="inner">
          <p className="title">{this.props.title}</p>
          <p className="url">{this.props.url}</p>
          <p className="description">{this.props.description}</p>
        </div>
        <div className="actions">
          <p className={loggedIn}>VOTE {this.props.votes}</p>
          <p className={loggedIn}>EDIT</p>
          <p>REPORT</p>
        </div>
        <div className="tags">
          <p>Tags:</p>
          {this.props.tags.map((tag, key) => {
            return (
              <p className="tag" key={key}>{tag}</p>
            )
          })}
        </div>
        <div className="dateAdded">
          <p>{this.props.dateAdded}</p>
        </div>
      </div>
    )
  }
}
