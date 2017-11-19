import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import SearchList from './searchList';
import Data from '../../sampleData';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSearch: '',
      termBar: '',
      searchList: Data.sampleData,
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
        <SearchBar onSubmit={this.onSubmit} handleCat={this.handleCat} handleLoc={this.handleLoc} />
        <div className="scrollbox">
          <SearchList searchList={this.state.searchList} />
        </div>
      </div>
    );
  }
}


// Search.propTypes = {
//   SOMEDATA: React.PropTypes.array.isRequired,
// };

export default Search;
