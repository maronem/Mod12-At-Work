// Plot from .html file
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// bar plot example with variables
var trace = [{
  x: ["burrito", "pizza", "chicken"],
  y: [10, 18, 5],
  type: "bar"
}];

var layout = {
  title: "Luncheon Survey",
  xaxis: {title: "Food Option"},
  yaxis: {title:"Number of Respondants"}
};

Plotly.newPlot("plotArea", trace, layout);


// SKILL DRILL - BARCHART

var drinks = [{
  x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
}]

var drink_layout = {
  title: "Percentage of Drink Orders",
  xaxis: {title: "Drink Type"},
  yaxis: {title: "Percent Ordered"}
};

Plotly.newPlot("plotArea", drinks, drink_layout);



// Creating Pie Charts
// Key difference is use Labels / Values vs. X/Y

var trace = {
  labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita","ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: 'pie'
};
var data = [trace];
var layout = {
  title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);



// SKILL DRILL - Create SCATTER PLOT
// KEY difference is add ** mode: markers ** to the trace variable

var trace = {
  x: [7,34,22,51,22,23,46,32],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  mode: 'markers',
  type: 'scatter'
};
var data = [trace];
var layout = {
  title: "'Scatter' Plot",
  xaxis: {title: "X-Values"},
  yaxis: {title: "Y-Values"}
};
Plotly.newPlot("plotArea", data, layout);



// The map() method in JavaScript applies a transformation to each element in an array. 
    // while for loop applies function to array

    var numbers = [1,2,3,4,5];
    var doubled = numbers.map(function(num){
        return num * 2;
    });

    console.log(doubled);

// SKILL DRILL Open VS Code and use map() to add 5 to each number in the following array:

var numbers = [0,2,4,6,8];

var plus_five = numbers.map(function(num){
  return num+5;
});

// SKILL DRILL - extract population of each city using map function
  // Functional programming leads to less errors/cleanliness
  // For loops imperitive, while map function is abstract

var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var cityPop = cities.map(function(city){
  return city.population;
});
console.log(cityPop);

// FILTER() method
// filter() performs an operation on every element in the original array. Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array
var numbers = [1,2,3,4,5];

var greater = numbers.filter(function(num){
  return num > 1;
});
console.log(greater)

// SKILL DRILL - filter array for words starting with letter s

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var s_words = words.filter((word) => word.startsWith("s"));
console.log(s_words);


// .SLICE() METHOD
// takes arguments (a,b) where slicing starts at a and ceases at b (including a but not b)
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// SKILL DRILL
// Use slice() to select the first three elements of the words array.

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var word_slice = words.slice(0,3);
console.log(word_slice);
