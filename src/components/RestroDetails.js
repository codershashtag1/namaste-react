import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import usefetchRestroDetails from '../utils/useFetchRestroDetails';

const RestroDetails = () => {
  const { resId } = useParams();
  const restaurantDetails = usefetchRestroDetails(resId);
  const {
    id,
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
    city,
    locality,
    totalRatingsString,
    labels,
    avgRatingString
  } = restaurantDetails;

  return (
    <div className="restro-details-main-container">
      <div>
        Home / {city} / {name}
      </div>
      <div className='restro-sub-title'>
        <h1>{name}</h1>
      </div>
      <div className='restro-details'>
        <h2>{avgRatingString} {"(" + totalRatingsString + ")"} {costForTwoMessage}</h2>
        <h3>{cuisines?.join(",")}</h3>
        <h3>Outlet {locality}</h3>
      </div>
    </div>
  )
}

export default RestroDetails;