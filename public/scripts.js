// console.log("I'm going to make React Love me...");

// // ===========================================
// // MAIN COMPONENT - THE KEEPER OF LOST SOULS
// // ===========================================
// // will hold all the state
// //get initial stat of search bar
var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			// goodhairday: [],
			// badhairday: [],
			// weatherSearch: "",
			weatherDisplay: null,
			display: "",
		};
	},
	// handleWeatherSearch: function(text){//this will set the state of the weather search bar to user's input text
	// 	this.setState({
	// 		weatherSearch: text,
	// 	});
	// },
	badsAjax: function(){
		$.ajax({
			url: "/bads/badhair/",
			method: "GET",
			success: function(data){
				console.log(data)
			}.bind(this),
			error: function(xhr, status, err){
				console.log(status, err.toString());
			}.bind(this)
		});
	},
	goodsAjax: function(){
		$.ajax({
			url: "/goods/goodhair",
			method: "GET",
			success: function(data){
				console.log(data)
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},
	handleWeatherResult: function(weatherData, zipcode){
		// console.log(weatherData);
		// console.log(zipcode);
		this.setState({
			weatherResult: {weather: weatherData, zipcode: zipcode}
		});
	},
	searchWeather: function(zipcode){
		$.ajax({
			url: "/weather/currentweather/" + zipcode,
			method: "GET",
			success: function(weatherData){
				console.log("============================");
				console.log("This is weather search data:");
				console.log(weatherData);
				console.log("============================");
				this.handleWeatherResult(weatherData, zipcode);
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},
	
	
	// changeSearchState: function(data){
	// 	this.setState({
	// 		weather: data,
	// 	});
	// },
	render: function(){
		return(
			<div>
				<h1>BAD HAIR DAY??</h1>
				<WeatherSearch
					searchWeather={this.searchWeather}
				/>
				<WeatherDisplay
					badsAjax={this.badsAjax}
					goodsAjax={this.goodsAjax}
					weatherResult={this.state.weatherResult}
				/>
			</div>
		);
	}
});

// // ===========================================
// // SEARCH COMPONENT
// // ===========================================
// //changes state
var WeatherSearch = React.createClass({
	getInitialState: function(){
		return{
			searchText: ""
		};
	},
	handleSubmit: function(e){
		e.preventDefault();
		var zipcode = this.state.searchText.trim();
		console.log("==================");
		console.log(zipcode);
		console.log("==================");
		this.props.searchWeather(zipcode);
		// this is just for testing
		// console.log(this.props.badsAjax());
		// console.log("==================");
		// console.log(this.props.goodsAjax());
	},
	handleSearchChange: function(e){
		this.setState({searchText: e.target.value})
	},
	render: function(){
		return(
			<div className="searchBar">
				<form onSubmit={this.handleSubmit}>
					<label
						className="search-label"
						htmlFor="search">Search
					</label>
					<br/>
					<input
						className="search-input"
						type="text"
						placeholder="zipcode"
						// value={this.props.text}
						// ref="textInput"
						onChange={this.handleSearchChange}
					/>
					<button className="button">??</button>
				</form>
			</div>
		)
	}
});

// // ===========================================
// // WEATHER DATA COMPONENT
// // ===========================================
// // just renders..??
var WeatherDisplay = React.createClass({
	
	handleImages: function(){
	 var weatherData = this.props.weatherResult;
	 var imageResult;

	 // if(weatherData.weather.main.humidity >= 85}) {
	 // 	badsAjax();
	 // 	// console.log(data);
	 // } else {
	 // 	goodsAjax();
	 // 	// console.log(data);
	 // }
	},
	render: function(){
		console.log(this.props);
		var weatherData = this.props.weatherResult;
		console.log("=============");
		console.log(weatherData)
		var imageResult = ""
		// if ({weatherData.weather.main.humidity >= 85){
		// 	badsAjax();
		// 	console.log(data);
		// } else {
		// 	goodsAjax();
		// 	console.log(data);
		// }
				//make badsAjax
				//imgURL = returned data
		//if weatherData.weather.humidity < 85
				//make goodAjax
				////imgURL = returned data


		if(weatherData == null){
			return(null)
		} else {
			return(
				//what am I rending on the user side?
				//The users current weather that I just got from the api call
				<div>
					<h1>weather display goes here</h1>
					 <p>{weatherData.weather.name}</p>
					 <p>humidity:{weatherData.weather.main.humidity}</p>
					 <img src={this.handleImages} />
				</div>
			);
		}
	}
});


// // ===========================================
// // IMAGE GRAB QUERY COMPONENT
// // ===========================================
// //changes state??? not sure yet
var HairCheck = React.createClass({
	//need to pass weather data down to this component
	humidityCheck: function(humidity){
		if(humidity >= 85){
			badsAjax();
		} else {
			goodsAjax()
		}
	},
	render: function(){//how can I inject the image from appropriately called Ajax Call into the render
		return(
			<div>
				<img src=""/>
			</div>
		);
	}
});


// // ===========================================
// // Hair Result DISPLAY COMPONENT
// // ===========================================
// // just renders
// var HairResultDisplay = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<h1>hair image result goes here</h1>
// 			</div>
// 		);
// 	}
// });



// // ===========================================
// //	RESET BUTTON COMPONENT
// // ===========================================
// // on click this will reset the entire page back to it's original state


// // ======================================
// // REACT DOM
// // ======================================

ReactDOM.render(
	<MainComponent />,
	document.getElementById("container"));


// // ======================================