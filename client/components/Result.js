import React from 'react';

export default class Result extends React.Component {
  render() {
    return (
      <div className="result column">
        <div className="row space-between">
          <div className="info column">
            <p className="title">{this.props.title}</p>
            <p className="address">{this.props.address}</p>
            <p className="description">{this.props.description}</p>
            <p className="date">Added on {this.props.date}</p>
          </div>
        </div>
        <div className="actions row space-around">
          <p>Vote</p>
          <p>Difficulty</p>
          <p>Report</p>
        </div>

      </div>
    )
  }
}
