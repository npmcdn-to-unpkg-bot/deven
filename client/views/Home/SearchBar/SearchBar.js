import React, { Component } from 'react';
import './SearchBar.styl';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.showFilters = () => {
      const filters = document.querySelector('.row.two');
      filters.classList.toggle('hidden');
    };
  };

  render() {
    return (
      <div className="SearchBar component">
        <div className="inner">
          <div className="row one">
            <input placeholder="Add Tags To Search" spellCheck="false"
              onKeyPress={this.props.addSearchTag}/>
            <button>
              <img src="build/images/search.svg"/>
            </button>
            <button className="show-filters" onClick={this.showFilters}>
              <img src="build/images/target-folder.svg"/>
            </button>
            <button onClick={this.props.emptyTagCloud}>
              <img src="build/images/trash.svg"/>
            </button>
          </div>

          <div className="row two hidden">
            <input list="languages" name="languages" placeholder="Languages"/>
            <datalist id="languages">
              <option value="Ruby">Ruby</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="JavaScript">JavaScript</option>
            </datalist>

            <input list="tools" name="tools" placeholder="Tools"/>
            <datalist id="tools">
              <option value="Express">Express</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="Angular">Angular</option>
              <option value="React">React</option>
            </datalist>

            <input list="keywords" name="keywords" placeholder="Keywords"/>
            <datalist id="keywords">
              <option value="Tutorials">Express</option>
              <option value="Videos">Bootstrap</option>
              <option value="Webinars">Angular</option>
              <option value="Articles">React</option>
            </datalist>
          </div>
        </div>
      </div>
    )
  }
}
