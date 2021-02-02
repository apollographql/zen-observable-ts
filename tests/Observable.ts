const { expect } = require("chai");

export default function (Observable: typeof import("..").Observable) {
  describe("Observable", () => {
    it("Should be a constructor function", () => {
      expect(typeof Observable).to.equal("function");
    });
  });
}
