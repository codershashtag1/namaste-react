import RestroContainer, { showDiscount } from "./RestroContainer";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData()
  }, []);

  const RestaurantShowDisCount = showDiscount(RestroContainer)

  const fetchData = async() => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.262958&lng=73.17849&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

      const jsonData = await data.json();
      if (jsonData?.data?.cards?.length > 0) {
        setResListData(jsonData?.data?.cards)
        setFilteredList(jsonData?.data?.cards)
      }
    } catch(err) {
      console.log(err);
    }
  }


  if(onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>Looks like you are offline</h1>
      </div>
    )
  }

  if(resListData?.length === 0) {
    return (
      <ShimmerUI />
    )
  }

  return (
    <div className="px-10">
      <div className="pt-10">
        <div className="text-6xl font-bold py-2">{resListData[0]?.card?.card?.title}</div>
        <div className="text-4xl font-extralight py-2"> {resListData[0]?.card?.card?.description}</div>
      </div>
      <div className="resto-to-explore">
        <div className="text-2xl font-bold py-2">Restaurants to explore</div>
      </div>
      <div className="flex gap-5 py-10">
        <button className = "p-5 bg-green-200 rounded-lg font-semibold border-2 border-green-200"
        onClick = {() => {
            const topREstaurants = resListData.filter((res) => res.card.card.info?.avgRating >= 4.3);
            // setResListData(topREstaurants);
            setFilteredList(topREstaurants);
          }}>Top Restaurants
        </button>
        <input 
          type = "text"
          className = "border-2 solid border-gray-300 rounded-lg p-2 font-semibold"
          placeholder = "Search for restaurants..."
          value = {searchText}
          onChange = {(e) => {
            setSearchText(e.target.value)
            let fiteredCard = resListData.filter((res) => res.card.card.info?.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setFilteredList(fiteredCard)
          }}
        />
      </div>
      <div className="flex gap-16 flex-wrap">
        {
          filteredList.map((res) => {
            if (res.card.card.info === undefined) {
              return null; // Skip if info is undefined
            } 
            return (
              <Link to = {"/restroDetails/" + res.card.card.info.id} key = {res.card.card.info.id}>
                {
                  res?.card?.card?.info.aggregatedDiscountInfoV3 != undefined
                  ? <RestaurantShowDisCount resData = {res?.card} discountOffer = {res?.card?.card?.info?.aggregatedDiscountInfoV3}/> 
                  : <RestroContainer resData = {res?.card} />
                }
                
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;