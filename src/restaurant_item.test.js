import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RestaurantItem from "./restaurant_item";

describe("normal suite", () => {
    let wrapper;
    const props = {
        name: "testName",
        type: "testType"
    };

    beforeEach(() => {
        wrapper = shallow(<RestaurantItem {...props} />);
    });

    describe('rendering', () => {
        it("renders without crashing", () => {
            expect(wrapper.length).toEqual(1);
        });

        it("should match snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("should render name and type", () => {
            expect(wrapper.find(".restaurantItem").text()).toEqual("Type: testType Name: testName");

        });

    })

});
