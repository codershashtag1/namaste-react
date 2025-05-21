import {useEffect, useState } from "react";

const usefetchRestroDetails = (resId) => {

  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    fetchRestroDetails();
  }, []);

  const fetchRestroDetails = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.262958&lng=73.17849&restaurantId="+ resId + "&catalog_qa=undefined&query=Biryani&submitAction=ENTER")

      const jsonData = await data.json();
      setRestaurantDetails(jsonData.data.cards)
      // setRestaurantDetails(jsonData?.data?.cards[2]?.card.card?.info);
    } catch(err) {
      console.log(err);
    }
  }

  return restaurantDetails

}

export default usefetchRestroDetails;