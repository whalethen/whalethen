import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
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
        <SearchBar
          onSubmit={this.onSubmit}
          handleCat={this.handleCat}
          handleLoc={this.handleLoc}
        />
        <div className="scrollbox">
          <SearchList
            searchList={this.state.searchList}
            numberOfDays={this.props.numberOfDays}
          />
        </div>
      </div>
    );
  }
}


Search.propTypes = {
  numberOfDays: propTypes.number.isRequired,
};

export default Search;
