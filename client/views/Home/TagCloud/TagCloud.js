import React, { Component } from 'react';
import './TagCloud.styl';
import { observer } from 'mobx-react';

import Tag from './Tag/Tag';

@observer
export default class TagCloud extends Component {
  render() {
    return (
      <div className="TagCloud component">
        <div className="inner">
          {this.props.tags.map((tag, key) => {
            return (
              <Tag tag={tag} key={key} removeTag={this.props.removeSearchTag}/>
            )
          })}
        </div>
      </div>
    )
  }
}
