import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import WeatherDisplay from './WeatherDisplay';


// class WeatherSearch extends Component {
//   constructor(){
//     super();

//     this.state = {
//       state: '',
//       city: ''
//     }
//   }


//   render() {
  const WeatherSearch = ({props}) => {
    console.log(this.props.handleSearch);
    // let handleSearch = this.props.handleSearch;
    // console.log(handleSearch);
    
    return(
      <div>
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
						// value={this.props.text}
						// ref="textInput"
						//onChange={this.handleSearchChange}
					/>
          <input
            className="form-control"
            name="state"
            id="state"
						type="text"
						placeholder="state"
						// value={this.props.text}
						// ref="textInput"
						//onChange={this.handleSearchChange}
					/>
					<button className="btn btn-primary active">??</button>
				</form>
        </div>
      </div>
    )
  }
  //}
//}

export default WeatherSearch;