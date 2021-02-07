const Employee = require("./employee");

class Intern extends Employee {
  constructor(response) {
    const { name, id, email, school, role } = response;

    super(name, id, email);

    this.school = school;
    this.role = role;
  }
  getSchool() {
    console.log(`School: ${this.school}`);
    return this.school;
  }
  getRole() {
    console.log(`Role: Intern`);
    return this.role;
  }
}
module.exports = Intern;
