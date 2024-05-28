import Utils from "./utils";

describe("Utils", () => {
  let utils;

  beforeEach(() => {
    utils = new Utils();
  });

  it("should add a class to an element", () => {
    // Simulate DOM structure
    document.body.innerHTML = '<div id="element"></div>';

    // Run clickEventClassActions
    Utils.clickEventClassActions("#element", "test-class", "add");

    // Check if class was added
    const element = document.querySelector("#element");
    expect(element.classList.contains("test-class")).toBe(true);
  });

  it("should remove a class from an element", () => {
    // Simulate DOM structure
    document.body.innerHTML = '<div id="element" class="test-class"></div>';

    // Run clickEventClassActions
    Utils.clickEventClassActions("#element", "test-class", "remove");

    // Check if class was removed
    const element = document.querySelector("#element");
    expect(element.classList.contains("test-class")).toBe(false);
  });

  it("should toggle a class on an element", () => {
    // Simulate DOM structure
    document.body.innerHTML = '<div id="element"></div>';

    // Run clickEventClassActions
    Utils.clickEventClassActions("#element", "test-class", "toggle");

    // Check if class was added
    let element = document.querySelector("#element");
    expect(element.classList.contains("test-class")).toBe(true);

    // Run clickEventClassActions again
    Utils.clickEventClassActions("#element", "test-class", "toggle");

    // Check if class was removed
    element = document.querySelector("#element");
    expect(element.classList.contains("test-class")).toBe(false);
  });
});
