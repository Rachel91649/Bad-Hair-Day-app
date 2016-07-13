// console.log("I'm going to make React Love me...");

// // ===========================================
// // MAIN COMPONENT - THE KEEPER OF LOST SOULS
// // ===========================================
// // will hold all the state
// //get initial stat of search bar
var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			goodHairDay: "",
			badHairDay: "",
			// weatherSearch: "",
			// weatherDisplay: null,
			display: "search"
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
			success: function(image){
				// console.log(data)
				// var image = [];
				// badHairDay.push(data);
				// console.log(image);
				this.goodsAjax();
				this.setState({ badHairDay: image })
				 // this.handleBadHairDay(data);
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
			success: function(image){
				// console.log(data)
				// var goodImage = [];
				// data.goodHairDay.forEach(function(image){
				// 	goodImage.push(image);
				// })
				// goodHairDay.push(data);
				// console.log(data);
				this.setState({ goodHairDay: image })
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},
	// handleBadHairDay: function(image){
	// 	this.setState({
	// 		badHairDay: { badHairDay: image }
	// 	});
	// },
	// handleGoodHairDay: function(image){
	// 	this.setState({
	// 		goodHairDay: { goodHairDay: image }
	// 	});
	// },
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
				// console.log("============================");
				// console.log("This is weather search data:");
				// console.log(weatherData);
				// console.log("============================");
			  this.badsAjax();
				this.handleWeatherResult(weatherData, zipcode);
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},
	// switchDisplay: function(){
	// 	if(this.state.display == null){
	// 		this.setState({display: "search"})
	// 	} else {
	// 		this.setState({display: "results"})
	// 		this.badAjax();
	// 		this.goodAjax();
	// 	}
	// },
	// changeSearchState: function(data){
	// 	this.setState({
	// 		weather: data,
	// 	});
	// },
	//need to create an if/else statement to toggle the displays
	//will need to add functionality to switch the state in main component

	render: function(){
		// if(this.state.display === "search"){
			return(
				<div>
					<h1>BAD HAIR DAY??</h1>
					<WeatherSearch
						searchWeather={this.searchWeather}
						badsAjax={this.badsAjax}
						goodsAjax={this.goodsAjax}
					/>
			
					<WeatherDisplay 
						goodHairDay={this.state.goodHairDay}
						badHairDay={this.state.badHairDay}
						weatherResult={this.state.weatherResult}
					/>
				</div>
			);
		
				
				{// <HairResultDisplay
				// 	goodHairDay={this.state.goodHairDay}
				// 	badHairDay={this.state.badHairDay}
				// 	weatherResult={this.state.weatherResult}
			 //  />
			}
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
		console.log("========ZipCode==========");
		console.log(zipcode);
		console.log("==================");
		this.props.searchWeather(zipcode);
		// this is just for testing
		// console.log("=======Image Ajax Calls Results===========");
		//this.props.badsAjax();
		// console.log("===========================================");
		//this.props.goodsAjax();
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
//  WEATHER Display COMPONENT
// ===========================================
var WeatherDisplay = React.createClass({
	// badsAjax();
	// goodAjax();
	// getImages: function(){
	//  var weatherData = this.props.weatherResult;
	//  if (weatherData.weather.main.humidity >= 85) {
	// 		<img src={badImage} />
	// 	} else {
	// 		<img src={goodImage} />
	// 		console.log("HALP!");
	// 	}
	// },
	//  // if(weatherData.weather.main.humidity >= 85}) {
	//  // 	badsAjax();
	//  // 	// console.log(data);
	//  // } else {
	//  // 	goodsAjax();
	//  // 	// console.log(data);
	//  // }
	// },
	render: function(){
		console.log(this.props);
		var weatherData = this.props.weatherResult;
		console.log("=============");
		console.log(weatherData)

		//const humid = renderIf({weatherData.weather.main.humidity <= 85});
		// console.log("=======humidity==========");
		// console.log(humid)
		var goodImage = this.props.goodHairDay;
 		var badImage = this.props.badHairDay;

		if (weatherData == null){
			return(null)
		} else if (weatherData != null && weatherData.weather.main.humidity >= 30 ) {
			return(
				//what am I rending on the user side?
				//The users current weather that I just got from the api call
				<div>
					<h1>weather display goes here</h1>
					 <p>{weatherData.weather.name}</p>
					 <p>humidity:{weatherData.weather.main.humidity}</p>
						<img src={badImage} />
				</div>
			);
		} else {
			return(
				<div>
					<img src={goodImage} /> 
				</div>
			);	
		}
	}
});

// // ======================================
// // HAIR RESULT DISPLAY
// // ======================================
// var HairResultDisplay = React.createClass({
// 	render: function(){
// 		console.log(this.props);
// 		var weatherData = this.props.weatherResult;
// 		console.log("=============");
// 		console.log(weatherData)
// 		// var imageResult = this.getImages;
// 		// var good = this.goodImage.map(function(image){
// 		// 	return(
// 		// 		{image} 
// 		// 	);
// 		// });
// 		var goodImage = this.props.goodHairDay;
// 		var badImage = this.props.badHairDay;

// 		console.log("this is goodImage:")
// 		console.log(goodImage);
// 		console.log("====================");
// 		// console.log(good);
// 		console.log("====================");
// 		console.log("this is bad image:");
// 		console.log(badImage);
//  		console.log("====================");
		
// 		if(weatherData.weather.main.humidity >= 70){
// 			return(
// 				<div>
// 					<img src={badImage} />
// 				</div>
// 			)
// 		} else {
// 			return(
// 				<div>
// 					<img src={goodImage} />
// 				</div>
// 			)
// 		}
// 	}
// });



// ======================================
// REACT DOM
// ======================================

ReactDOM.render(
	<MainComponent />,
	document.getElementById("container"));


// ======================================


// SCRAP CODE //
// // // ===========================================
// // // IMAGE GRAB QUERY COMPONENT
// // // ===========================================
// // //changes state??? not sure yet
// var HairCheck = React.createClass({
// 	//need to pass weather data down to this component
// 	humidityCheck: function(humidity){
// 		if(humidity >= 85){
// 			badsAjax();
// 		} else {
// 			goodsAjax()
// 		}
// 	},
// 	render: function(){//how can I inject the image from appropriately called Ajax Call into the render
// 		return(
// 			<div>
// 				<img src=""/>
// 			</div>
// 		);
// 	}
// });


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



// ===========================================
//	RESET BUTTON COMPONENT
// ===========================================
// on click this will reset the entire page back to it's original state


//trying to render image//
	 {//{this.getImages}
	}

	 {// handleimage();
	 }
	 {//{this.handleImages}
	}
	 {//<img src={this.handleImages} />
	}
