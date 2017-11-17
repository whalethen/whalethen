import React from 'react';
import SearchBar from './searchBar';
// import $ from '../../node_modules/jquery';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termBar: '',
      searchList: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit() {
    axios.post('/search', { query: this.state.termBar })
      .then(response => this.setState({ searchList: response }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Search Stuff</h1>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}


{ /* Search.propTypes = {
  SOMEDATA: React.PropTypes.object.isRequired,
}; */ }

export default Search;
