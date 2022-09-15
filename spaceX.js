// Create variable for api url and view data using d3.json
const url = "https://api.spacexdata.com/v2/launchpads";

// Wait for json data retreival then print receivedData
d3.json(url).then(receivedData => console.log(receivedData));

// d3.json() returns a JavaScript promise: it places an API call to the URL and executes subsequent lines of code only when the API call is complete

// Once the data is retrieved, it is assigned the arbitrary parameter name receivedData by the arrow function and printed in the console

// Using a promise with the then() method ensures tall the data requested from the API is received before executing the next part of code

// Retreive only data from Vandenberg Air Force Base (1st array element)
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// To retreive the full name of VAFB from spaceX data
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Retreive the latitude of VAFB
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));


// SKILL DRILL - Use map() to print only the lat. and long. coord. of each SpaceX launch station.
d3.json(url).then(console.log(spaceXResults.map(spaceXResults.location.latitude)));
d3.json(url).then(console.log(spaceXResults.map(spaceXResults.location.longitude)));
