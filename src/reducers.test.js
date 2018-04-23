import reducer from "./reducers";

describe("normal suite", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
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
        });
    });

    it("should handle RANK_TYPE_CHANGE", () => {
        expect(
            reducer(
                {},
                {
                    type: "LOCATION_CHANGE",
                    payload: "Tainan"
                }
            )
        ).toEqual({
            selectedLocation: "Tainan"
        });
    });

    it("should handle SELECTED_RESTAURANT_TYPE_CHANGE", () => {
        expect(
            reducer(
                {},
                {
                    type: "SELECTED_RESTAURANT_TYPE_CHANGE",
                    payload: "Thai"
                }
            )
        ).toEqual({
            selectedType: "Thai"
        });
    });
});
