// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

    // i think for loop on the array would go here?

    // and i think at the end of this will be the function, writeToFile(fileName, data) that was defined above
}

// Function call to initialize app
init();



//ideas for later:
// create an array of all the questions that will be asked to the user
// then a for loop on that array that includes inquirer 
// 2. Using multidimensional arrays
const moreSongs = [
    ['Bad Guy', 1],
    ['The Wheels on the Bus', 2],
    ['Friday', 3],
  ];
  
  // for of loop
  for (const song of moreSongs) {
    console.log(song);
  }
  