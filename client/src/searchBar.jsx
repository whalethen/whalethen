import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <label>
          Search:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  term: React.PropTypes.string.isRequired
};

export default SearchBar;