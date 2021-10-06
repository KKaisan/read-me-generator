// TODO: Include packages needed for this application
var fs = require("fs")
var inquirer = require ("inquirer")
var readMe  = require("./Develop/utils/generateMarkdown")
var util = require("util")

// TODO: Create an array of questions for user input
    function question(){
    return inquirer
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

var writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create a function to initialize app
async function init() {
   try {
       const answers = await question();
       const content = readMe(answers);
       await writeFileAsync('./Develop/utils/README.md', content);
       console.log('✔️  Successfully wrote to README.md');
   }   catch(err) {
       console.log(err);
   }
 }
// Function call to initialize app
init();