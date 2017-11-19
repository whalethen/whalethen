import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../node_modules/axios';
import Search from './search';
import Timeline from './timeline';
import TimelineInputBox from './timelineInputBox';
import StartDateBox from './startDateBox';
import EndDateBox from './endDateBox';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      timelineName: '',
      startDate: '',
      endDate: '',
      numberOfDays: 0,
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
        <div className="title">WhaleThen</div>
        <div className="timelineParams">
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
          <button className="scheduleSubmit" onSubmit={event => this.onSubmit(event)}>
            Make New Schedule
          </button>
        </div>
        <div className="columnsContainer">
          <div className="TimelineContainer">
            <Timeline />
          </div>
          <div className="SearchContainer">
            <Search data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
