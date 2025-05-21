import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router';
import usefetchRestroDetails from '../utils/useFetchRestroDetails';
import SelectedCardDetails from './SelectedCardDetails';
import AccordianGroupCard from "./AccordianGroupCard"
import RestaurantDetailContext from '../utils/RestaurantDetailContext';


const RestroDetails = () => {
  const { resId } = useParams();
  const restaurantDetails = usefetchRestroDetails(resId);
  console.log(restaurantDetails);
  const selectedCardDetails = restaurantDetails[2]?.card?.card?.info;
  const groupedCards = restaurantDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

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
  } = selectedCardDetails || {};

  return (
    <div className="w-8/12 flex items-start flex-col mx-auto my-10">
      <div className='my-14'>
        <Link to="/" className='text-gray-500'>Home</Link>
        <span className='text-gray-500'> / {city} / <b>{name}</b> </span>
      </div>
      <div className='px-5 w-full'>
        <RestaurantDetailContext.Provider value={selectedCardDetails}>
          <SelectedCardDetails />
        </RestaurantDetailContext.Provider>
        <RestaurantDetailContext.Provider value={groupedCards}>
          <AccordianGroupCard />
        </RestaurantDetailContext.Provider>
      </div>
    </div>
  )
}

export default RestroDetails;