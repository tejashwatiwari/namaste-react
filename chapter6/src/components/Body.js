import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  //State Variable - Super Powerful Variable
  //We will use Hooks - using React State
  //Hook is a normal JS function - its prebuilt - its a utility function
  //useState() or useEffect() - it maintains the state of the component
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
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