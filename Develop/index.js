const inquirer = require('inquirer');
const fs = require ('fs');
const renderLicense = require('./lisence');



const convertToMarkdown = (data) => {
  return `
# ${data.title}

## License
- ${renderLicense(data)}
- Click on the badge to view Copyright Information

## Table of Contents:
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Testing](#testing)
-[Contact](#contact)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## Questions
 ${data.reachout}
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
};



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'list',
      choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0',],
      message: 'Choose a License type',
      name: 'license'
    },
    {
      type: 'input',
      message: 'Give a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Give any Installation instructions',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how your project can be used',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can others contribue to your project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Give instructions on how users can run tests for your project',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username'
    },
    {
      type: 'input',
      message: 'Enter instructions about how to reach you for further questions',
      name: 'reachout'

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
  ])
  .then((data) => {

    const markDown = convertToMarkdown(data)

    fs.writeFile('README.md', (data, markDown), (err) =>
        err ? console.log('error') : console.log('Success!')
  )})
  







