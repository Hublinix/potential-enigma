// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 return `
 [License Overview](https://choosealicense.com/licenses/${license}/)
 `

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
## Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage)
* [Contribution Guideline](#contribution)
* [Test Instruction](#test)
* [License](#license)
* [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage

${data.Info}

## Contribution 

${data.Guidlines}

## Test 

${data.Instructions}

## License
${renderLicenseSection(data.license)}

## Questions
Feel free to reach me at ${data.Address}

Check out my other projects at
[github Profile](https://github.com/${data.Address})`;

}

module.exports = generateMarkdown;
