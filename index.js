// TODO: Include packages needed for this application
var fs = require("fs")
var inquirer = require ("inquirer")
var readMe  = require("./Develop/utils/generateMarkdown")
var util = require("util")

// TODO: Create an array of questions for user input
    function question(){
     inquirer
      .prompt([
   {
       type: "input",
       name: "Title",
       message: "Project Title: ",
    },
    {
        type: "input",
        name: "description",
        message: "Description of project: "
     },
     {
        type: "input",
        name: "installation",
        message: "Installation process: ",
     },
  {
        type: "input",
        name: "usage",
        message: "Project for: "
     },
     {
        type: "input",
        name: "license",
        message: "Any License? ",
     },
      {
     type: "input",
    name: "contribute",
    message: "Who contributed to the project: "
                },
                {
    type: "input",
    name: "test",
     message: "Test included? "
    },
     {
    type: "input",
     name: "issues",
     message: "Any issues? "
     },
     {
     type: "input",
    name: "username",
    message: "Github Username: "
  },
                {
    type: "input",
    name: "email",
    message: "Email Address: "
   }   
 ])
    }

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
async function init() {

var answers = question();
var content = readMe(answers)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}
}
// Function call to initialize app
init();