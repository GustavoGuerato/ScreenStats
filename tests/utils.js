class Utils {
  static clickEventClassActions(
    toElement,
    className,
    operationType,
    selectorElement = toElement
  ) {
    const clonedElement =
      typeof toElement === "string"
        ? document.querySelector(toElement)
        : toElement;
    const clonedSelectorElement =
      typeof selectorElement === "string"
        ? document.querySelector(selectorElement)
        : selectorElement;

    clonedElement.addEventListener("click", () => {
      switch (operationType) {
        case "add":
          clonedSelectorElement.classList.add(className);
          break;
        case "remove":
          clonedSelectorElement.classList.remove(className);
          break;
        case "toggle":
          clonedSelectorElement.classList.toggle(className);
          break;
        default:
          console.log("Please enter a valid operation type.");
          break;
      }
    });
  }

  getIdValue(element) {
    return document.getElementById(element).value ?? null;
  }
}

describe("Utils", () => {
  let utils;

  beforeEach(() => {
    utils = new Utils();
  });

  it("should add a class to an element", () => {
    const element = document.createElement("div");
    element.id = "element";
    document.body.appendChild(element);

    Utils.clickEventClassActions("#element", "test-class", "add");

    expect(element.classList.contains("test-class")).toBe(true);
  });

  it("should remove a class from an element", () => {
    const element = document.createElement("div");
    element.id = "element";
    document.body.appendChild(element);

    element.classList.add("test-class");

    Utils.clickEventClassActions("#element", "test-class", "remove");

    expect(element.classList.contains("test-class")).toBe(false);
  });

  it("should toggle a class on an element", () => {
    const element = document.createElement("div");
    element.id = "element";
    document.body.appendChild(element);

    Utils.clickEventClassActions("#element", "test-class", "toggle");

    expect(element.classList.contains("test-class")).toBe(true);

    Utils.clickEventClassActions("#element", "test-class", "toggle");

    expect(element.classList.contains("test-class")).toBe(false);
  });
});
