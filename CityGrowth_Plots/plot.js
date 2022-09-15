console.log(cityGrowths);

// TO DO:
  // Sort the cities in descending order of population growth.
  // Select only the top five cities in terms of growth.
  // Create separate arrays for the city names and their population growths.
  // Use Plotly to create a bar chart with these arrays.


// 1. Sort the cities in desc. order of pop. growth
var sortedCities = cityGrowths.sort((a,b) =>
  a.Increase_from_2016 - b.Increase_from_2016).reverse();

// 2. Select the top 5 cities 
var topFiveCities = sortedCities.slice(0,5);

// 3. Create arrays for city names and pop. growths
var topFiveCityNames = topFiveCities.map(city => city.City)

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)); //parseInt() turns string into integer

// 4. Create a bar chart with the arrays

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};

var data = [trace];

var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis = {title: "City"},
  yaxis = {title: "Population Growth 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);


// SKILL DRILL - Use the same dataset to create a bar chart of the seven largest cities by population

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = sortedCities.map(city => city.City);

var topSevenCityGrowths = sortedCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
  x: topSevenCityNames,
  y: topSevenCityGrowths,
  type: "bar"
};

var data = [trace];

var layout = {
  title: "Top Seven Rapidly Growing Cities",
  xaxis: {title: "City"},
  yaxis: {title: "Population Growth 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);