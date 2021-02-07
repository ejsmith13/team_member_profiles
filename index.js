const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
];

// function to write README file
function writeToFile(fileName, data) {
  fs.appendFileFile(`./dist/test.html`, data, (err) =>
    err ? console.error(err) : console.log("sucess")
  );
}

function init() {
  inquirer.prompt([...questions]).then((response) => {
    const { name, id, email, role, github, office, school } = response;

    switch (role) {
      case "manager":
        console.log("manager");
        const manager = new Manager(name, id, email, office);
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getRole();
        manager.getOffice();
        break;
      case "engineer":
        console.log("eningeer");
        const engineer = new Engineer(name, id, email, github);
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getRole();
        engineer.getGitHub();
        break;
      case "intern":
        console.log("intern");
        const intern = new Intern(name, id, email, school);
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getRole();
        intern.getSchool();
        break;

      default:
        return "Please enter data";
    }

    // const answer = generateHTML.createPage(response);

    // writeToFile("test.html", answer);
  });
}

init();
