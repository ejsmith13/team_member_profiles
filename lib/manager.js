const Employee = require("./employee");

class Manager extends Employee {
  constructor(response) {
    const { name, id, email, office, role } = response;

    super(name, id, email);

    this.office = office;
    this.role = role;
  }
  getOffice() {
    console.log(`office: ${this.office}`);
    return this.office;
  }
  getRole() {
    console.log("Role: Manager");
    return this.role;
  }
}
module.exports = Manager;
