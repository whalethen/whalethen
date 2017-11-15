import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      someData: someContainer
    }
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
}

handleChange(e) {
  this.setState({
    term: e.target.value
  })
}


onSearch(this.state.term) {
  //ajax get
  //this.setState.someData: ajax success data
}


render() {
  return (
    <div>
      <h1>SOME TITLE </h1>
      <Search handleChange={this.handleChange} onSearch={this.onSearch}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));