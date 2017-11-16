import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';
import Timeline from './timeline';
import axios from '../../node_modules/axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      timelineName: '',
      startDate: '',
      endDate: '',
    };
  }
  componentDidMount() {
    // on init function to make get request to server
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">WhaleThen</div>
        <div className="timelineParams">
          <div className="inputBox">
            <label className="timelineName" htmlFor="timelineName">
            Timeline Name:
            <input
              id="timelineName"
              type="text"
              name="timelineName"
              onChange={event => this.onInputChange(event)}
              placeholder="enter a name"
            />
            </label>
          </div>
          <div className="inputBox">
            <label className="startDate" htmlFor="startDate">
            Start Date:
            <input
              id="startDate"
              type="text"
              name="startDate"
              onChange={event => this.onInputChange(event)}
              placeholder="enter a start date"
            />
            </label>
          </div>
          <div className="inputBox">
            <label className="endDate" htmlFor="endDate">
            End Date:
            <input
              id="endDate"
              type="text"
              name="endDate"
              onChange={event => this.onInputChange(event)}
              placeholder="enter an end date"
            />
            </label>
          </div>
        </div>
        <div className="columnsContainer">
          <div className="TimelineContainer">
            <Timeline />
          </div>
          <div className="SearchContainer">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
