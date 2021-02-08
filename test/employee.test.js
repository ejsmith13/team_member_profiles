const Employee = require(`../lib/employee.js`);

describe("Employee", () => {
  const worker = "jason";
  const id = 12;
  const email = "test@aol.com";
  const role = "employee";
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const result = new Employee(worker).getName();
      expect(result).toEqual(worker);
    });
  });
  describe("getId", () => {
    it("should return the id of the employee", () => {
      const result = new Employee(worker, id).getId();
      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const result = new Employee(worker, id, email).getEmail();
      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return the job of the employee", () => {
      const result = new Employee(worker, id, email, role).getRole();
      expect(result).toEqual(role);
    });
  });
});
