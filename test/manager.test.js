const Manager  = require(`../lib/manager.js`);

describe("Manager ", () => {
  const response= {
      role: "Manager ",
      office: 12
  }

  describe("getOffice", () => {
    it("should return the Manger's office number", () => {
      const result = new Manager (response).getOffice();
      expect(result).toEqual(response.office);
    });
  });

  describe("getRole", () => {
    it("should return the role of Manager ", () => {
      const result = new Manager (response).getRole();
      expect(result).toEqual(response.role);
    });
  });
});