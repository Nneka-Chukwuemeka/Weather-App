import React from 'react';
import './Search.css';

class Search extends React.Component {
  state = { location: 'type location' };
  HandleSubmit = (e) => {
    e.preventDefault();
    this.props.searchSubmit(this.state.location);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <input
            type="text"
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
          <button id="submit" type="submit" onSubmit={this.HandleSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
