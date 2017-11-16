import React from 'react';
import SearchBar from './searchBar.jsx';
import $ from '../../node_modules/jquery';

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
    console.log('hi button')
    $.ajax({
      method: 'GET',
      data: {query: this.state.termBar},
      url: '/search',
      contentType: 'application/json',
      success: (data) => {
        console.log('get request data', data)
        this.setState({
          searchList: data
        })
      },
      error: (err) => {
        console.log('error', err);
      },
    });
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

