import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';



class Weather extends Component {
  constructor(){
    super();

    this.state = {
      goodHairDayImg: '', 
      badHairDayImg: '',
      state: '',
      city: '',
      showImage: false,
      showWeather: false,
      weather: []
    }
  }

  //gets both good and bad imaes from the db
  getBadHairImage = () => {
    axios.get("/bads/badhair")
    .then((response) =>{
      console.log(response.data);
      this.setState({
        badHairDayImg: response.data
      })
    });  
  }

  getGoodHairImage = () => {
    axios.get("/goods/goodhair")
    .then((response) => {
      console.log(response.data);
      this.setState({
        goodHairDayImg: response.data
      })
    })
  }

  handleSearchInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleWeatherSearchSubmit = (e) => {
    e.preventDefault();
  }

  searchWeather = (state, city) => {
    axios.get(`/weather/currentweather/${state}/${city}`)
    .then((response) => {
      console.log(response);
    });
  }


  

  
  componentDidMount(){
    this.getBadHairImage();
    this.getGoodHairImage();
  }

  render(){
    const { goodHairDayImg, badHairDayImg, state, city } = this.state;

    console.log(city, state);
    return(
      <div>
        <h1>Weather search and images displaged here</h1>
        <div className="form-group">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <label
              className="search-label"
              htmlFor="search">Search
            </label>
            <br/>
            <input
              className="form-control"
              name="city"
              id="city"
              type="text"
              placeholder="city"
              value={this.state.city}
              onChange={this.handleSearchInput}
            />
            <input
              className="form-control"
              name="state"
              id="state"
              type="text"
              placeholder="state"
              value={this.state.state}
              onChange={this.handleSearchInput}
            />
            <button className="btn btn-primary active">??</button>
          </form>
        </div>
        <WeatherDisplay />
      </div>
    )
  }
}

export default Weather;
