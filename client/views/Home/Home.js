import React from 'react';
import './Home.styl';

class Home extends React.Component {
	handleSearchClick() {
			alert('clicked');
	}

	render( ) {
		return (
			<div className="home view">
				<div className="search">
					<div className="input row">
						<input placeholder="query devon" type="text" spellCheck="false"/>
						<img src="images/search.svg" onClick={this.handleSearchClick}/>
					</div>
					<div className="buttons">
						<button>TAGS</button>
						<button onClick={this.handleSearchClick}>SEARCH</button>
						<button>CLEAR</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
