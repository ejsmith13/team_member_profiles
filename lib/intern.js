const Employee = require("./employee");

class Intern extends Employee {
  constructor(response) {
    const { name, id, email, school } = response;

    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    console.log(`School: ${this.school}`);
    return this.school;
  }
  getRole() {
    console.log(`Role: Intern`);
    return "Intern";
  }
}
module.exports = Intern;
