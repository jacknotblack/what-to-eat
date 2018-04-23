import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";
import ConnectedRestaurantList from "./container";

describe("normal suite", () => {
  const shallowWithStore = (component, store) => {
    const context = {
      store
    };
    return shallow(component, { context });
  };
  const testState = {
    locations: [
      'Taipei',
      'Tokyo'
    ],
    selectedLocation: 'Taipei',
    types: [
      'Chinese',
      'Japanese',
      'Indian',
      undefined
    ],
    restaurants: [
      {
        name: "鼎泰豐",
        type: "Chinese"
      },
      {
        name: "老張牛肉麵",
        type: "Chinese"
      },
      {
        name: "上引水產",
        type: "Japanese"
      },
      {
        name: "印度皇宮",
        type: "Indian"
      },
      {
        name: "同壽司",
        type: "Japanese"
      },
    ],
  };
  const store = createMockStore(testState);
  const container = shallowWithStore(<ConnectedRestaurantList />, store);

  it("should render successfully", () => {
    expect(container).toBeTruthy();
  });

  it("should dispatch when calling action", () => {
    const props = {
      location: "Tokyo",
      type: "Japanese"
    };

    container.props().onLocationClick(props.location);
    expect(
      store.isActionDispatched({
        type: "LOCATION_CHANGE",
        payload: props.location
      })
    ).toEqual(true);
    container.props().onTypeClick(props.type);
    expect(
      store.isActionDispatched({
        type: "SELECTED_RESTAURANT_TYPE_CHANGE",
        payload: props.type
      })
    ).toEqual(true);
  });

  describe("filter with type selected",()=>{
    testState.selectedType = "Japanese";
    const store = createMockStore(testState);
    const container = shallowWithStore(<ConnectedRestaurantList />, store);
    expect(container.props().restaurants.length).toEqual(2)
  })
});


