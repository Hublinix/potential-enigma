// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = ["What is your movtivation?","Why did you build this project?","What problem does it solve?","What did you learn?"];

inquirer
    .prompt([
        {
            type: "input",
            message:"Project Title",
            name: "Title",
    
        },

        {
            type: "input",
            message:"Desription",
            name: "Description",
    
        },

        {
            type: "input",
            message:"Installation Instructions",
            name: "Installation",
    
        },

        {
            type: "input",
            message:"Usage Information",
            name: "Info",
    
        },
        {
            type: "input",
            message:"Contribution Guidlines",
            name: "Guidlines",
    
        },
        {
            type: "input",
            message:"Test Instructions",
            name: "Instructions",
    
        },
        {
            type: "input",
            message:"Usage Information",
            name: "Info",
    
        },
        {
            type: "list",
            message:"Select License",
            name: "license",
            choices:["ISC","MIT","APACHE 2.0","GPL","none"]
    
        },
        {
            type: "input",
            message:"GitHub Username",
            name: "Usermane",
    
        },
        {
            type: "input",
            message:"E-mail address",
            name: "Address",
    
        },
    ])
    .then((answers) => {
        console.log(answers)
       
        fs.writeFileSync("README.md",generateMarkdown(answers),err => {
            if(err) throw err;
            console.error("ERROR")
        });
        
    })
    .catch(err => console.error(err));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
