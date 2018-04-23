import actions from "./actions";

describe("actions", () => {
  it("should create an action to change location", () => {
    const text = "Beijing";
    const expectedAction = {
      type: "LOCATION_CHANGE",
      payload: text
    };
    expect(actions. changeLocation(text)).toEqual(expectedAction);
  });

  it("should create an action to change restaurant type", () => {
    const text = "Mexican";
    const expectedAction = {
      type: "SELECTED_RESTAURANT_TYPE_CHANGE",
      payload: text
    };
    expect(actions.switchType(text)).toEqual(expectedAction);
  });
});
