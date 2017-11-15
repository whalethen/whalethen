import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      termBar: '',
      termEntry: '',
      termList: ''
    }
  }
}

onHandleChange() {

}

onSubmit(e) {
  console.log('our button submitted');
  e.preventDefault();
}

render() {
  return (
    <div>
      <h1>Search Stuff</h1>
      <SearchBar termBar={this.state.termBar} onSubmit={this.onSubmit} />

    </div>
  )
}

Search.propTypes = {
  SOMEDATA: React.PropTypes.object.isRequired
};

export default Search;