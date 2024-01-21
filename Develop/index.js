const inquirer = require('inquirer');
const fs = require ('fs');
const { error } = require('console');


const convertToMarkdown = (data) => {
  return `
# ${data.title}

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

## Contact
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
        message: 'What is the link to your GitHub?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
  ])
  .then((data) => {

    const markDown = convertToMarkdown(data)

    fs.writeFile('readme.md', (data, markDown), (err) =>
        err ? console.log(error) : console.log('Success!')
  )})
  






