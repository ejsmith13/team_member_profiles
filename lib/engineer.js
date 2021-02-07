const Employee = require("./employee");

class Engineer extends Employee {
  constructor(response) {
    const { name, id, email, github, role } = response;
    super(name, id, email);

    this.github = github;
    this.role = role;
  }
  getGitHub() {
    console.log(`Github: github.com/${this.github}`);
    return `github.com/${this.github}`;
  }
  getRole() {
    console.log("Role: Engineer");
    return this.role;
  }
}

module.exports = Engineer;
