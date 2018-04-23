import React from "react";
import PropTypes from "prop-types";
import RestaurantItem from "./restaurant_item"

const RestaurantList = ({ restaurants, locations, selectedLocation, types, onLocationClick, onTypeClick }) => (
    <div className="restaurantList">
        {locations.map(l => (
            <button className="locationButton" key={l} onClick={() => { onLocationClick(l) }}>{l}</button>
        ))}<br />
        {types.map(t => (
            <button className="typeButton" key={t || 'all'} onClick={() => { onTypeClick(t) }}>{t || 'all'}</button>
        ))}<br />
        LOCATION: <span className='selectedLocation'>{selectedLocation}</span> <br /><br />
        {restaurants.map(r => (
            <RestaurantItem key={r.name} name={r.name} type={r.type} />
        ))}
    </div>
)

RestaurantList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    selectedLocation: PropTypes.string.isRequired
}

export default RestaurantList