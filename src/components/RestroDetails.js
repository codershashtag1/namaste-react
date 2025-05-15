import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// https: //www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.262958&lng=73.17849&restaurantId=332614&catalog_qa=undefined&query=Biryani&submitAction=ENTER

const RestroDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestroDetails();
  }, []);

  const fetchRestroDetails = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.262958&lng=73.17849&restaurantId="+ resId + "&catalog_qa=undefined&query=Biryani&submitAction=ENTER")

      const jsonData = await data.json();
      console.log(jsonData?.data?.cards[2]?.card.card?.info);
      setRestaurantDetails(jsonData?.data?.cards[2]?.card.card?.info);

    } catch(err) {
      console.log(err);
    }
  }

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