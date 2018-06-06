import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';



class Weather extends Component {
  constructor(){
    super();

    this.state = {
      goodHairDayImg: '', 
      badHairDayImg: '',
      showImage: false,
      weather: []
    }
  }

  //gets both good and bad imaes from the db
  getBadHairImage = () => {
    axios.get("/bads/badhair")
    .then((response) =>{
      console.log(response);
    });  
  }

  getGoodHairImage = () => {
    axios.get("/goods/goodhair")
    .then((response) => {
      console.log(response);
    })
  }


  componentDidMount(){
    this.getBadHairImage();
    this.getGoodHairImage();
  }

  render(){
    return(
      <div>
        <h1>Weather search and images displaged here</h1>
      </div>
    )
  }
}

export default Weather;
