import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.event.votes,
    };
    this.updateVotes = this.updateVotes.bind(this);
    this.patchVotesInDB = this.patchVotesInDB.bind(this);
  }
  patchVotesInDB() {
    axios.put('/entry', {
      timelineId: this.props.timelineId,
      day: this.props.day.day,
      eventId: this.props.event._id,
      votes: this.state.votes,
    });
  }
  updateVotes(e) {
    if (e.target.value === '+') {
      this.setState({
        votes: this.state.votes += 1,
      }, this.patchVotesInDB);
    } else {
      this.setState({
        votes: this.state.votes -= 1,
      }, this.patchVotesInDB);
    }
  }
  render() {
    return (
      <div className="event">
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <span className="vote">{` Votes: ${this.state.votes}   `}
          <button className="votes" value="-" onClick={this.updateVotes}>-</button>
          <button className="votes" value="+" onClick={this.updateVotes}>+</button>
        </span>
      </div>
    );
  }
}

Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Events;
