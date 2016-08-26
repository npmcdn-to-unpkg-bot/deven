import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.styl';

import SearchBar from './SearchBar/SearchBar.js';
import TagCloud from './TagCloud/TagCloud.js';
import SearchResults from './SearchResults/SearchResults.js';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			searchTags: [],
			searchResults: [
				{
					title: 'JavaScript | Learn JavaScript the Hard Way',
					url: 'https://www.learnjavascriptthehardway.com',
					description: ' Learn JavaScript Properly (For Beginners and Experienced Programmers) or related JavaScript tutorials online; this is the worst way to learn a programming language. I would like to thank you for all your hard work, this site is a great resource.',
					votes: 205,
					dateAdded: 'December 20, 1993',
					thisUserVoted: true,
					tags: ['javascript', 'express', 'node']
				},
				{
					title: 'YDKJS | You don\'t know JavaScript!',
					url: 'https://www.ydkjs.com',
					description: 'You Don\'t Know JS (book series). This is a series of books diving deep into the core mechanisms of the JavaScript language. The first edition of this book sucked.',
					votes: 99,
					dateAdded: 'December 20,2099',
					thisUserVoted: true,
					tags: ['flask', 'django', 'python']
				}
			]
		};
		this.emptyTagCloud = () => {
			this.setState({
				searchTags: []
			})
		}
	};

	addSearchTag(e) {
		console.log(e.key);
		if (e.charCode == 32 || e.key == ' ') {
      const tag = e.target.value.trim(),
						target = e.target;

			if (this.state.searchTags.indexOf(tag.toLowerCase()) >= 0 ||
					tag == '') {
				target.value = '';
				return;
			}

			this.setState({
				searchTags: this.state.searchTags.concat(tag)
			}, () => {
				target.value = '';
			});
    };
	};

	removeSearchTag(e) {
		e.stopPropagation();
		const tag = e.target.innerText.toLowerCase(),
					searchTags = this.state.searchTags,
					tagIndex = searchTags.indexOf(tag);

		if (tagIndex < 0) { return }

		console.log(tag);
		console.log(tagIndex);
		console.log(searchTags.slice(0, tagIndex).concat(searchTags.slice(tagIndex + 1)));
		this.setState({
			searchTags: searchTags.slice(0, tagIndex).concat(searchTags.slice(tagIndex + 1))
		});
	};

	render() {
		return (
			<div className="Home view">
				<SearchBar
					addSearchTag={e => this.addSearchTag(e)}
					logInSuccess={this.props.logInSuccess}
					emptyTagCloud={this.emptyTagCloud}
				/>

				<TagCloud
					tags={this.state.searchTags}
					removeSearchTag={e => this.removeSearchTag(e)}
				/>

			<SearchResults
				results={this.state.searchResults}
				loggedIn={this.props.loggedIn}
			/>
			</div>
		)
	}
}
