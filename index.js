const fs = require('fs');
const inquirer = require('inquirer');

inquirer
	.prompt([
		{
			title: 'input',
			message: 'What is your GitHub username?',
			name: 'git',
		},
		{
			title: 'input',
			message: 'What is your email?',
			name: 'email',
		},
		{
			type: 'input',
			message: 'What is your project Title?',
			name: 'title',
		},
		{
			type: 'input',
			message: 'What was your motivation?',
			name: 'description',
		},
		{
			tite: 'input',
			message: 'Examples of use...',
			name: 'usage',
		},
		{
			title: 'input',
			message: 'List of collaborators...',
			name: 'credits',
		},
		{
			input: 'list',
			message: 'What licenses were used?',
			name: 'license',
			choices: ['MIT', 'ISC', 'Apache'],
		},
		{
			type: 'input',
			message: 'What command should be used to install dependencies?',
			name: 'install',
		},
		{
			type: 'input',
			message: 'What command should be used to run test?',
			name: 'test',
		},
		{
			type: 'input',
			message: 'How can one contribute to your repo?',
			name: 'contribute',
		},
	])
	.then((answers) => {
		if (answers['license'] === 'MIT') {
			let stamp = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

			const template = `# ${answers.title}
        ## Description
        ${answers.description}
        ## ${stamp}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Contribution](#contribute)
        - [Test](#test)
        - [Questions](#questions)
        
        ## Installation
        
        To install necessary dependencies use the following command:
        '''
        ${answers.install}
        '''
        ## Usage 
        ${answers.usage}
        Deployed Site:...
        
        ## License This project is licensed under ${answers.license}
        
        ## Contribution
        ${answers.contribute}
        
        ## Test
        To run test, use the following command:
        '''
        ${answers.test}
        '''
        ## Questions
        If you have any questions about this project, open an issue or contact me at ${[
					answers.email,
				]}(dajuanhudson33@gmail.com). 
        Check out more of my work at ${[
					answers.git,
				]}(https://github.com/SirRel1)`;
			fs.writeFileSync('./README.md', `${template}`);
		}
	});
