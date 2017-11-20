import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search';
import Timeline from './Timeline';
import TimelineInputBox from './TimelineInputBox';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      timelineName: '',
      startDate: '',
      endDate: '',
      numberOfDays: 4,
      timelineId: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }
  componentDidMount() {
    // on init function to make get request to server
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    this.countDays();
  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  addNewEvent(event) {
    // input: event => {name, type}
    axios.post('/entry', event)
      .then(() => axios.get(`/timeline/${this.state.timelineId}`))
      .then(response => this.setState({ data: response }))
      .catch(err => console.error(err));
  }

  countDays() {
    if (this.state.startDate.includes('.') || this.state.endDate.includes('.')) {
      alert('Incorrect Date Format. Please format in XX/XX/XXXX');
    }
    const splitVariable = this.state.startDate.includes('-') ? '-' : '/';
    const start = this.state.startDate.split(splitVariable);
    const end = this.state.endDate.split(splitVariable);
    const numberOfDays = ((end[0] - start[0]) * 10) + (end[1] - start[1]);

    this.setState({ numberOfDays });
  }

  render() {
    return (
      <div className="App">
        <div className="container timelineParams">
          <div className="title">WhaleThen</div>
          <TimelineInputBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <StartDateBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <EndDateBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <button
            className="scheduleSubmit"
            onSubmit={event => this.onSubmit(event)}
          >
            Make New Schedule
          </button>
        </div>
        <Timeline />
        <Search data={this.state.data} numberOfDays={this.state.numberOfDays} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
