import Cards, { Localitylabel } from "./Cards";
import { useContext, useEffect, useState } from "react";
import { REST_LIST_API, REST_LIST_UPDATE_API } from "../../Utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import { Link } from "react-router";
import userInfo from "../../Utils/UserContext";

const Dashboard = () => {
  const [ListOfRestra, setListOfRestra] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();
  const CardPromoted = Localitylabel(Cards);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_LIST_API);
    const json = await data.json();
    const json_data = json?.data?.cards.filter(
      (card) => card?.card?.card?.info
    );
    setListOfRestra(json_data);
    setFilteredList(json_data);
  };

  if (status == false) {
    return <h1>Looks like your in offline!!!!</h1>;
  }
  return ListOfRestra == [] ? (
    <Shimmer />
  ) : (
    <div className='border-gray-50'>
      <div className='m-4 flex justify-center'>
        <input
          className='border border-solid border-gray-300 rounded-lg w-96 mx-4 p-1'
          placeholder='Search ....'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredCard = ListOfRestra.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            setFilteredList(filteredCard);
          }}></input>

        <button
          className='px-5 bg-slate-200 hover:bg-slate-500 rounded-lg'
          onClick={() => {
            const topRatedList = ListOfRestra.filter(
              (resData) => resData.card.card.info.avgRating >= 4.2
            );
            setFilteredList(topRatedList);
          }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className='flex-wrap justify-start grid grid-flow-row grid-cols-5'>
        {filteredList.map((restaurants) => (
          <Link
            key={restaurants?.card?.card?.info?.id}
            to={"/" + restaurants?.card?.card?.info?.id}>
            {restaurants?.card?.card?.info?.areaName ? (
              <CardPromoted resData={restaurants} />
            ) : (
              <Cards
                key={restaurants?.card?.card?.info?.id}
                resData={restaurants}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
