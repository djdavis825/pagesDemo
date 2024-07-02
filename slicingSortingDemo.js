// SLICING IN JS

// array of names
let names = ["Jim", "James", "Paul", "Tyrone", "Erica"];

// use the slice() function to get a subset of names
// to get the first two names
let firstTwo = names.slice(0, 2);   // starts AT index 0 and stops BEFORE index 2, ie: index 0 and 1, ["Jim", "James"]

console.log(firstTwo);

// to get the last 3 names
let lastThree = names.slice(2, 5);  // starts AT index 2 and stops BEFORE index 5, ie: index 2, 3 and 4, ["Paul", "Tyrone", "Erica"]

console.log(lastThree);

// SORTING IN JS
// array of numbers
let numbers = [3, 4, 1, 2];

// can also use .reverse function
console.log(numbers);
console.log(numbers.reverse());

// sorting in JS requires the .sort() function with a internal helper function
// that is used to tell how the values are to be compared
// to sort in decending order
let decendingOrder = numbers.sort(
    function compare(firstNum, nextNum)
    {
        // function is used to fell how to compare adjacent values
        return nextNum - firstNum;  // not subtracting, but puts the second number before the first number if the second
                                    // number is greater than the first
    }
);

// display results
console.log(decendingOrder);

// we can also use arrow functions to do the same logic
let decendingOrderArrow = numbers.sort((firstNum, nextNum) => nextNum - firstNum);

// display results
console.log(decendingOrderArrow);

// to sort in ascending order
let ascendingOrder01 = numbers.sort(
    function compare(firstNum, nextNum)
    {
        return firstNum - nextNum;  // put the smaller number first
    }
)

console.log(ascendingOrder01);

// ascending order using the arrow function
let ascendingOrder02 = numbers.sort((firstNum, nextNum) => firstNum - nextNum);

// display results
console.log(ascendingOrder02);

// use the greekromandata.js file then put values in order based on the greek search results
let sortedByGreek = searchResults.sort((first, next) => next.greekSearchResults - first.greekSearchResults);

// take the top ten greek search results using the slice() function
let greekSliced = sortedByGreek.slice(0, 10);

console.log(greekSliced);

// reverse the data so that we can see the data going from left to right in the plot
greekSliced.reverse();

// set up the trace for the greek data
let trace = {
    x: greekSliced.map(result => result.greekSearchResults),
    y: greekSliced.map(result => result.greekName),
    text: greekSliced.map(result => result.greekName),
    type: "bar",
    orientation: "h"
};

// put trace into a data array
let data = [trace];

// add a title and padding to the plot
let layout = {
    title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);