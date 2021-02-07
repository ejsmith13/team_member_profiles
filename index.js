const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

const employeeArray = [];
const anwerArray=[];
const questions = [
  {
    name: "name",
    message: "What is the workers name?",
    type: "input",
  },
  {
    name: "id",
    message: "What is the worker's id number?",
    type: "input",
  },
  {
    name: "email",
    message: "What is the employee's email address?",
    type: "input",
  },
  {
    name: "role",
    message: "What is the employee's role?",
    type: "list",
    choices: ["manager", "engineer", "intern"],
  },
  {
    name: "office",
    message: "What is their office number?",
    type: "input",
    when: (answer) => answer.role === "manager",
  },
  {
    name: "github",
    message: "What is the employee's GitHub user name?",
    type: "input",
    when: (answer) => answer.role === "engineer",
  },
  {
    name: "school",
    message: "What school do they attend?",
    type: "input",
    when: (answer) => answer.role === "intern",
  },
  {
    name: "additional",
    message: "would you like to add more members?",
    type: "confirm",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log("sucess")
  );
}

function init() {
  inquirer
    //prompt questions for details of people
    .prompt([...questions])
    .then((response) => {
      const { name, id, email, role, github, office, school } = response;
      //switch to tell program to make manager, engineer, or intern
      switch (role) {
        case "manager":
          employeeArray.push(new Manager(response));
          break;
        case "engineer":
          employeeArray.push(new Engineer(response));
          break;
        case "intern":
          employeeArray.push(new Intern(response));
          break;
        default:
          return "Please enter role";
      }

      //asks if you would like to add additional members
      if (response.additional === true) {
        return init();
      }
      //calls function to create tiles
      createTiles();
    });
}
//creates a card for each person and pushes it to an answers array
function createTiles() {
  employeeArray.forEach((item) => {
    anwerArray.push(generateHTML.createCard(item));
  });
  createHTML(anwerArray);
}
//creates html for page and sends it to fs for creation
function createHTML(answerArray) {
  
  const page= generateHTML.createPage(answerArray)

  writeToFile("team.html", page)
  
}

init();


