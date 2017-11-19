import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import SearchEntryList from './SearchEntryList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSearch: '',
      termBar: '',
      searchList: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleCat = this.handleCat.bind(this);
    this.handleLoc = this.handleLoc.bind(this);
  }
  onSubmit() {
    axios.get('/search', { category: this.state.termBar, location: this.state.locationSearch })
      .then((response) => {
        this.setState({
          searchList: response,
        });
      })
      .catch(err => console.error(err));
  }
  handleCat(e) {
    this.setState({
      termBar: e.target.value,
    });
  }
  handleLoc(e) {
    this.setState({
      locationSearch: e.target.value,
    });
  }
  render() {
    return (
      <div className="container search">
        <div className="searchTitle">Search Stuff</div>
        <SearchBar onSubmit={this.onSubmit} handleCat={this.handleCat} handleLoc={this.handleLoc} />
        <SearchEntryList searchList={this.state.searchList} />
      </div>
    );
  }
}


// Search.propTypes = {
//   SOMEDATA: React.PropTypes.array.isRequired,
// };

export default Search;
