// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import markdownGeneration from './markdownGeneration.js';
import { log } from "console";

// TODO: Create an array of questions for user input
const questions = [
    //below questions are ordered around and lightly based off of the README guide https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
    { type: 'input', name: 'usage', message: 'Provide usage information:' },
    { type: 'input', name: 'features', message: 'Provide a list of the features in your project' },
    //list of licenses provided by ChatGPT. Searched for a list of the most popular free licenses on Github.
    {
        type: 'list', name: 'license', message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
    },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'input', name: 'credits', message: 'Provide a list of your collaborators with links to their GitHub profiles.' },
    { type: 'input', name: 'github', message: 'Provide your Github profile name' },
    { type: 'input', name: 'email', message: 'Provide your email' },

];


// TODO: Create a function to write README file. 
function writeToFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log('Error occurred when writing the file', err);
        } else {
            console.log('Yay! README.md created successfully');
        }
    });
}

// TODO: Create a function to initialize app
//Init function utilizing inquirer to prompt the questions and utilize the answers to write the README file. 
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = markdownGeneration(answers);
        writeToFile('README.md', markdown);
    });
}


// Function call to initialize app
init();
