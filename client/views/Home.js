import React from 'react';
import { Link } from 'react-router';
import Result from '../components/Result';
import results from '../data/results';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTags: [],
			searchResults: []
		}
	}

	componentDidMount() {
		console.log('Home mounted!');
		this.setState({
			tagCloud: (() => document.getElementsByClassName('tag-cloud')[0])(),
			tagsDiv: (() => document.getElementById('tags'))
		})
	}

	handleSearchClick() {
		console.log(results);
		this.setState({
			searchResults: results
		})
		// this.setState({activeTags: []});
	}

	handleClearClick() {
		this.setState({activeTags: []});
	}

	handleTagAddition(event) {
		if (event.key != ' ') { return };

		const input = event.target,
					inputValue = input.value,
					activeTags = this.state.activeTags,
					tag = inputValue.substr(0, inputValue.indexOf(' ')),
					tagCloud = this.state.tagCloud,
					tagsDiv = this.state.tagsDiv;

		if (tag == '') { input.value = ''; return }

		activeTags.unshift(tag);
		this.setState({activeTags});
		event.target.value = '';
	}

	render() {
		return (
			<div className="home view row x-center">
				<div className="max-1200 column x-center">

					<div className="intro column x-center">
						<h1>The search engine for developers.</h1>
						<h2>User-driven search results, at your service.</h2>
					</div>

					<div className="search column max-992 x-center">
						<div className="input row y-center">
							<input placeholder="search, by, tags"
										 type="text" spellCheck="false"
										 onKeyUp={this.handleTagAddition.bind(this)}/>
							<img src="images/search.svg" onClick={this.handleSearchClick}/>
						</div>

						<div className="buttons row x-center">
							<button><Link to="/search-help">HELP</Link></button>
							<button onClick={this.handleSearchClick.bind(this)}>SEARCH</button>
							<button onClick={this.handleClearClick.bind(this)}>CLEAR</button>
						</div>

						<div className="tag-cloud">
							<div id="tags">
								{this.state.activeTags.map((tag, i) => {
									return (
										<div className="tag" key={i}>
											<p>{tag}</p>
										</div>
									)
								})}

								<div className="padder">he</div>
							</div>
						</div>
					</div>

					<div className="results column max-992 x-center">
						{this.state.searchResults.map((result, i) => {
							return (
								<Result
									key={i}
									title={result.title}
									address={result.address}
									description={result.description}
									date={result.date}
									imageSource={result.imageSource}
								/>
							)
						})}
					</div>

				</div>
			</div>
		)
	}
}
