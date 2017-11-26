import React from 'react';
import propTypes from 'prop-types';


class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			votes: this.props.event.votes,
		}
		this.updateVotes = this.updateVotes.bind(this);
	}

	updateVotes(e) {
		console.log('hey this event is what Brian was looking for', this.props);
		if (e.target.value === "+") {
			this.setState({
				votes: this.state.votes += 1,
			});
		} else {
			this.setState({
				votes: this.state.votes -= 1,
			});
		}

	}

	render() {
	  return (<div className="event">
	    <div className="eventName">{this.props.event.name}</div>
	    <div className="description">{this.props.event.address}</div>
	    <span className="vote">{` Votes: ${this.state.votes}   `}  
	    	<button className="votes" value="+" onClick={this.updateVotes}>+</button>
	    	<button className="votes" value="-" onClick={this.updateVotes}>-</button>
	    </span>
	  </div>
	  )
	}
};


Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
};

export default Events;
