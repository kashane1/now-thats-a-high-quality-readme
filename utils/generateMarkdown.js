// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
      break;
    case 'Boost':
      return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
      break;
    case 'Eclipse':
      return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
      break;
    case 'IBM':
      return 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
      break;
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg'
      break;
    case 'Mozilla':
      return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
      break;
    case 'ODbl':
      return 'https://img.shields.io/badge/License-ODbL-brightgreen.svg'
      break;
    case 'PDDL':
      return 'https://img.shields.io/badge/License-PDDL-brightgreen.svg'
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt'
      break;
    case 'Eclipse':
      return 'https://opensource.org/licenses/EPL-1.0'
      break;
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0'
      break;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
      break;
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0'
      break;
    case 'ODbl':
      return 'https://opendatacommons.org/licenses/odbl/'
      break;
    case 'PDDL':
      return 'https://opendatacommons.org/licenses/pddl/'
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseSection(data.license)}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
---
### Description
${data.description}
### Installation
${data.installation}
### Usage
${data.usage}
### License
${renderLicenseLink(data.license)}
### Contributing
${data.guidelines}
### Tests
${data.testing}
---
#### Questions
Find me on Github: https://github.com/${data.gitHubUser} 

Or reach out to me with any questions or comments: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
