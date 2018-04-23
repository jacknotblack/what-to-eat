import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RestaurantList from "./component";

describe("normal suite", () => {
    let wrapper;
    const props = {
        restaurants: [
            {
                name: "restaurant A",
                type: "type1"
            },
            {
                name: "some restaurant B",
                type: "type2"
            },
            {
                name: "restaurant C",
                type: "type1"
            }
        ],
        locations: [
            "ShangHai",
            "Taipei",
            "LA"
        ],
        selectedLocation: 'LA',
        types: [
            "type1",
            "type2",
            undefined
        ],
        onLocationClick: jest.fn(),
        onTypeClick: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<RestaurantList {...props} />);
    });

    describe('rendering', () => {
        it("renders without crashing", () => {
            expect(wrapper.length).toEqual(1);
        });

        it("should match snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("should render location buttons", () => {
            expect(wrapper.find(".locationButton").length).toEqual(props.locations.length);
            for (let i = 0; i < props.locations.length; i++) {
                expect(wrapper.find(".locationButton").at(i).text()).toEqual(props.locations[i]);
            }
        });

        it("should render selected location", () => {
            expect(wrapper.find(".selectedLocation").text()).toEqual(props.selectedLocation);
        });

        it("should render type buttons", () => {
            expect(wrapper.find(".typeButton").length).toEqual(props.types.length);
            for (let i = 0; i < props.types.length; i++) {
                props.types[i] === undefined ?
                    expect(wrapper.find(".typeButton").at(i).text()).toEqual('all') :
                    expect(wrapper.find(".typeButton").at(i).text()).toEqual(props.types[i]);
            }
        });

        it("should render resturants", () => {
            expect(wrapper.find("RestaurantItem").length).toEqual(props.restaurants.length);
            for (let i = 0; i < props.restaurants.length; i++) {
                Object.entries(wrapper.find("RestaurantItem").at(i).props()).forEach(([key, value]) => {
                    expect(value).toEqual(props.restaurants[i][key])
                })
            }
        });

    })

    describe('event handlers', ()=>{
        it('triggers onLocationClick when locationButton is clicked',()=>{
            wrapper.find(".locationButton").at(0).simulate('click');
            expect(props.onLocationClick.mock.calls.length).toEqual(1)
        });
        
        it('triggers onTypeClick when typeButton is clicked',()=>{
            wrapper.find(".typeButton").at(0).simulate('click');
            expect(props.onTypeClick.mock.calls.length).toEqual(1)
        });
    })

});
