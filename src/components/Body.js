import RestroContainer from "./RestroContainer";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData()
  }, []);

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


  if(resListData?.length === 0) {
    return (
      <ShimmerUI />
    )
  }

  return (
    <div className="main-container">
      <div className="sub-content">
        <div className="title">{resListData[0]?.card?.card?.title}</div>
        <div className="sub-title">
        {
          resListData[0]?.card?.card?.description
        }
        </div>
      </div>
      <div className="resto-to-explore">
        <div className="restaurants">Restaurants to explore</div>
      </div>
      <div className = "top-restaurants" >
        <button className = "btn sub-title" onClick = {() => {
            const topREstaurants = resListData.filter((res) => res.card.card.info?.avgRating >= 4.3);
            // setResListData(topREstaurants);
            setFilteredList(topREstaurants);
          }}>Top Restaurants
        </button>
        <input 
          type = "text"
          className = "sub-title"
          placeholder = "Search for restaurants..."
          value = {searchText}
          onChange = {(e) => {
            setSearchText(e.target.value)
            let fiteredCard = resListData.filter((res) => res.card.card.info?.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setFilteredList(fiteredCard)
          }}
        />
      </div>
      <div className="restro">
        {
          filteredList.map((res) => {
            if (res.card.card.info === undefined) {
              return null; // Skip if info is undefined
            } 
            return (
              <Link to = {"/restroDetails/" + res.card.card.info.id} key = {res.card.card.info.id} >
                <RestroContainer key = {res.card.card.info.id} resData = {res.card} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;