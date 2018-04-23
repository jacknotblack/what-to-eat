const actions = {
    changeLocation: location => ({
      type: "LOCATION_CHANGE",
      payload: location
    }),
    switchType: type => ({
      type: "SELECTED_RESTAURANT_TYPE_CHANGE",
      payload: type
    })
  };
  
  export default actions;