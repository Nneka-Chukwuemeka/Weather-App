import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import './App';

const secret = '4dd2d9541d8d026b65f6901eba53060d';
export default class App extends React.Component {

  handleSearchOnSubmit = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${secret}`;
    const response = await axios.get(url, {});
    console.log(response.data);
  };
  render() {
    return (
      <div>
        <Search searchSubmit={this.handleSearchOnSubmit} />
      </div>
    );
  }
}
