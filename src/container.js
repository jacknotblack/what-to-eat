import { connect } from "react-redux";
import actions from "./actions";
import RestaurantList from "./component";

const getFilteredRestaurants = (restaurants, type) => {
  return restaurants.filter(r => type === undefined || r.type === type)
}

const mapDispatchToProps = dispatch => ({
  onLocationClick: location => {
    dispatch(actions.changeLocation(location));
  },
  onTypeClick: type => {
    dispatch(actions.switchType(type));
  }
});

const mapStateToProps = state => {
  return {
    locations: state.locations,
    selectedLocation: state.selectedLocation,
    types: state.types,
    restaurants: getFilteredRestaurants(state.restaurants, state.selectedType)
  }
};

const ConnectedRestaurantList = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

export default ConnectedRestaurantList;