import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTags: []
		}
	}

	handleSearchClick() {
			alert('clicked');
	}

	handleClearClick() {
		this.setState({activeTags: []});
		console.log('ok');
	}

	handleTagAddition(event) {
		if (event.key != ',') { return };
		const inputValue = event.target.value;
		const activeTags = this.state.activeTags;
		activeTags.push(inputValue.substr(0, inputValue.indexOf(',')));
		this.setState({activeTags})
		event.target.value = '';
	}

	render() {
		return (
			<div className="home view row x-center">
				<div className="max-1200 column x-center">
					<div className="search column max-992 x-center">
						<div className="input row y-center">
							<input placeholder="search, by, tags"
										 type="text" spellCheck="false"
										 onKeyUp={this.handleTagAddition.bind(this)}/>
							<img src="images/search.svg" onClick={this.handleSearchClick}/>
						</div>
						<div className="buttons row x-center">
							<button><Link to="/search-help">HELP</Link></button>
							<button onClick={this.handleSearchClick}>SEARCH</button>
							<button onClick={this.handleClearClick.bind(this)}>CLEAR</button>
						</div>
						<div className="tag-cloud">
							{this.state.activeTags.map((tag, i) => {
								return (
									<div className="tag" key={i}>
										<p>{tag}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
