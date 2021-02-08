const Intern = require(`../lib/intern.js`);

describe("Intern", () => {
  const response= {
      role: "intern",
      school: "William and Mary"
  }

  describe("getSchool", () => {
    it("should return the school the intern goes to", () => {
      const result = new Intern(response).getSchool();
      expect(result).toEqual(response.school);
    });
  });

  describe("getRole", () => {
    it("should return the role of Intern", () => {
      const result = new Intern(response).getRole();
      expect(result).toEqual(response.role);
    });
  });
});