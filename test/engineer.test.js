const Engineer = require(`../lib/engineer.js`);

describe("Engineer", () => {
  const response= {
      role: "engineer",
      github: "test"
  }

  describe("getGitHub", () => {
    it("should return the name of the Engineer's GitHub Account/Website", () => {
      const result = new Engineer(response).getGitHub();
      expect(result).toEqual(`github.com/${response.github}`);
    });
  });

  describe("getRole", () => {
    it("should return the role of Engineer", () => {
      const result = new Engineer(response).getRole();
      expect(result).toEqual(response.role);
    });
  });
});
