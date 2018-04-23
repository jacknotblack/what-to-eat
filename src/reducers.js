const initState = {
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
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOCATION_CHANGE':
         return {
             ...state,
             selectedLocation: action.payload
            }
        case 'SELECTED_RESTAURANT_TYPE_CHANGE':
         return {
             ...state,
             selectedType: action.payload
         }
        default:
         return state
    }
}

export default reducer;