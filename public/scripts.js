console.log("I'm going to make React Love me...");

// ===========================================
// MAIN COMPONENT - THE KEEPER OF LOST SOULS
// ===========================================
// will hold all the state
//get initial stat of search bar
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
	searchWeather: function(zipcode){
		$.ajax({
			url: "/weather/getweather/" + zipcode,
			method: "GET",
			success: function(weatherData){
				console.log("============================");
				console.log("This is weather search data:");
				console.log(weatherData);
				console.log("============================");
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},
	handleCurrentWeather: function(weatherData, zipcode){
		this.setState({
			weatherDisplay: {weather: weatherData, zipcode: zipcode}
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
				<HairResult />
				<WeatherDisplay
					weatherData={this.state.weatherDisplay}
				/>
			</div>
		);
	}
});

// ===========================================
// SEARCH COMPONENT
// ===========================================
//changes state
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

// ===========================================
// WEATHER DISPLAY COMPONENT
// ===========================================
// just renders..??
var WeatherDisplay = React.createClass({
	render: function(){
		var weatherData = this.props.weatherData;
		var self = this;
		return(
			//what am I rending on the user side?
			//The users current weather that I just got from the api call
			<div>
				<h1>weather display goes here</h1>
			</div>
		)
	}
})


// ===========================================
// WEATHER SEARCH RESULT COMPONENT
// ===========================================
// just renders


// ===========================================
// IMAGE GRAB QUERY COMPONENT
// ===========================================
//changes state??? not sure yet


// ===========================================
// Hair Result DISPLAY COMPONENT
// ===========================================
// just renders

var HairResult = React.createClass({
	render: function(){
		return(
			<div>
				<h1>image result goes here</h1>
			</div>
		);
	}
});

// ===========================================
//	RESET BUTTON COMPONENT
// ===========================================
// on click this will reset the entire page back to it's original state


// ======================================
// REACT DOM
// ======================================

ReactDOM.render(
	<MainComponent />,
	document.getElementById("container"));


// ======================================