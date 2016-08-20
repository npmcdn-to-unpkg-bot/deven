import React from 'react';
import './Tag.styl';

class Tag extends React.Component {
  handleXClick(e) {
    const tag = e.target.parentNode;
    tag.parentNode.removeChild(tag);
    alert('x clicked');
  }

  render() {
    return (
      <div className=`tag box y-center ${this.props.category}`>
        <p>{tag.name}</p>
        <img src="./images/add.svg" onClick={this.handleXClick}/>
      </div>
    )
  }
}

export default Tag;
