const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employeeArray = [];
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
  fs.writeFile(`./dist/test.html`, data, (err) =>
    err ? console.error(err) : console.log("sucess")
  );
}

function init() {
  inquirer
    .prompt([...questions])
    .then((response) => {
      console.log(response)
      const { name, id, email, role, github, office, school } = response;

      

      switch (role) {
        case "manager":
          console.log("manager");
          employeeArray.push(new Manager(response));
          break;
        case "engineer":
          console.log("eningeer");
          employeeArray.push(new Engineer(response));
          break;
        case "intern":
          console.log("intern");
          employeeArray.push(new Intern(response));
          break;
        default:
          return "Please enter role";
      }
      console.log(employeeArray)
      if(response.additional === true){
        init();
      }

      

      // employeeArray.forEach((item) => {
      //   const answer = generateHTML.createPage(item);
      //   writeToFile("test.html", answer);
      // });

      // const answer = generateHTML.createPage(response);

      // writeToFile("test.html", answer);
    })
   
}

init();
