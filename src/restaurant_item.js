import React from "react";
import PropTypes from "prop-types";

const RestaurantItem = ({ name, type }) => (
    <div className="restaurantItem">
        Type: {type} <br/>
        Name: {name}
        <br/><br/>
    </div>
)

RestaurantItem.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default RestaurantItem