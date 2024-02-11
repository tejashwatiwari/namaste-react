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
        "https://api.imgflip.com/get_memes"
        );
      const json = await data.json();
      setListOfRestaurant(json?.data?.memes);
      console.log(setListOfRestaurant(json?.data))
    };

    // if (listOfRestaurants.length===0) {
    //   return <Shimmer />
    // }

    return listOfRestaurants.length===0?(<Shimmer />):(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" />
            <button>Search</button>
          </div>
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
          listOfRestaurants.map((meme) => <RestaurantCard key= {meme.id} resData={meme}/>)
        }
        </div>
      </div>
    );
  };

  export default Body;


  //whenever a state variable changes, react will re-render my component