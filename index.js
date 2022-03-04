// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are there any installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are the guidelines for contributing to your project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Describe the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Pick from this list of licenses:',
      choices: ['Apache', 'Boost', 'Eclipse', 'IBM',  'MIT', 'Mozilla', 'ODbl', 'PDDL']
    },
    {
      type: 'input',
      name: 'gitHubUser',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'userEmail',
      message: 'What is your preferred email address?'
    },
  ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data) 
  )
}

// TODO: Create a function to initialize app
const init = () => {
  promptQuestions()
    .then((data) => writeToFile('README.md', data))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();