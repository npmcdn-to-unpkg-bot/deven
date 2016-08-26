import React, { Component } from 'react';
import './SearchResults.styl';

import Result from './Result/Result.js';

export default class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults component">
          {this.props.results.map((result, key) => {
            return (
              <Result key={key}
                title={result.title}
                url={result.url}
                description={result.description}
                dateAdded={result.dateAdded}
                votes={result.votes}
                thisUserVoted={result.thisUserVoted}
                tags={result.tags}
                loggedIn={this.props.loggedIn}
              />
            )
          })}
      </div>
    )
  }
}
