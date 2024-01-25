import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  //State Variable - Super Powerful Variable
  //We will use Hooks - using React State
  //Hook is a normal JS function - its prebuilt - its a utility function
  //useState() or useEffect() - it maintains the state of the component
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2101585&lng=77.4293184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if (listOfRestaurants.length===0) {
    //   return <Shimmer />
    // }

    return listOfRestaurants.length===0?(<Shimmer />):(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {      
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4
              );
            console.log(listOfRestaurants); 
            setListOfRestaurant(filteredList)
          }}>
            Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
        {
          listOfRestaurants.map((restaurant) => <RestaurantCard key= {restaurant.info.id} resData={restaurant}/>)
        }
        </div>
      </div>
    );
  };

  export default Body;


  //whenever a state variable changes, react will re-render my component