// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = ["What is your movtivation?","Why did you build this project?","What problem does it solve?","What did you learn?"];

inquirer
    .questions([
        {
            type: "input",
            message:"What is your movtivation?",
            question: "Motive",
    
        },

        {
            type: "input",
            message:"Why did you build this project?",
            question: "Project",
    
        },

        {
            type: "input",
            message:"What problem does it solve?",
            question: "Problem",
    
        },

        {
            type: "input",
            message:"What did you learn?",
            question: "Learning",
    
        },
    ])
    .then((answers) => {
        fs.writeFileSync("Thank you for answering out questions the README file will start soon.",JSON.stringify(answers,null,'\t'),(err)=>{
            console.error(err)
        })
    })
    .catch(err => console.error(err));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
