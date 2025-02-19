import Shimmer from "./Shimmer";
import { CDN_URL, dummy_image_url } from "../../Utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import { CDN_DISH_IMG_URL } from "../../Utils/constant";
import { useEffect, useState } from "react";
import CardsCatagory from "./CardsCatagory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchdata();
  // }, [searchText]);

  // const fetchdata = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl/search?lat=17.3982116&lng=78.3748513&restaurantId=2519&isMenuUx4=true&query=bir&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   // console.log(json)
  //   // setSearchText(json)
  // };

  if (menuInfo == null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwo, cloudinaryImageId, locality, cuisines } =
    menuInfo?.data?.cards[2]?.card?.card?.info;
  let levelOne =
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterCatagory = levelOne.filter(
    (list) => list.card?.card?.categories || list.card?.card?.itemCards
  );
  const listCatogory = filterCatagory.map((item) => item.card.card);

  return (
    <div className='bg-neutral-100'>
      <div className='flex mx-12 my-4 border border-gray-300 shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className=' w-36 '>
          <img className='p-2' src={CDN_URL + cloudinaryImageId}></img>
        </div>
        <div className='p-3'>
          <h4 className='font-bold'>{name} </h4>
          <h5>{avgRating}</h5>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{costForTwo / 100} for two person</h5>
          <h5>{locality}</h5>
        </div>
      </div>

      <div>
        <p className=' font-bold text-center'>Menu</p>
      </div>
      {filterCatagory.map((category) => (
        <CardsCatagory key={category.card?.card?.title} data={category} />
      ))}
      {/* <div className="grid grid-cols-3">
                <div className="col-span-2 border border-gray-300 shadow dark:bg-gray-800 dark:border-gray-700 ml-12 mr-5 my-5">  
                    <div className="flex justify-end">
                        <input className="border border-solid border-gray-500 rounded-lg m-4 p-1 w-96" placeholder="Search Items...." value={searchText} onChange={(e)=> {
                                setSearchText(e.target.value);
                            // const filteredCard = ListOfRestra.filter(res => res.card.card.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
                            // setFilteredList(filteredCard);
                            } }>
                        </input>
                    </div>           
                    { 
                        listCatogory.map(item => (
                            <div className="">
                                <h5 className="m-2 font-semibold">{item.title} - ( {item.categories?.length || item.itemCards?.length } )</h5>
                                <div className=" ">
                                    {
                                        item.itemCards?.length > 0 ? (                                   
                                                (item.itemCards).map(item1 =>(
                                                    <div className="m-4  border border-gray-200 rounded-lg hover:bg-slate-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                                        <ul className="grid grid-flow-col grid-cols-2">
                                                        <div className="m-2">
                                                                <li className="p-1 font-medium">{item1.card.info.name} </li>
                                                                <li className="p-1 ">{'₹ '+(item1.card.info.price || item1.card.info.defaultPrice )/100}</li>
                                                                {(Object.keys(item1.card.info.ratings.aggregatedRating).length > 2) ? (<li className="p-1 font-normal ">{item1.card.info.ratings.aggregatedRating.rating} ({item1.card.info.ratings.aggregatedRating.ratingCountV2})</li>) : <li></li>}
                                                                <li className="p-1 text-wrap font-normal">{item1.card.info.description}</li>
                                                            </div>
                                                            <div className="flex justify-end relative m-5">
                                                            {item1.card.info.imageId == null ? (<img className=" w-48 h-32 rounded-lg" src={dummy_image_url}></img>) : (<img className=" w-48 h-32 rounded-lg" src={CDN_DISH_IMG_URL + item1.card.info.imageId}></img>)}
                                                            <button className=" absolute top-3/4 right-14 bg-zinc-100 text-black rounded mx-2 my-2 px-4 py-1 " onClick={()=>{
                                                                    alert("Clicked")
                                                                }}>ADD</button>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                )
                                            )   
                                        ) : (
                                            (item.categories).map(item1 =>(
                                                <div className="">
                                                    <ul className="m-2 font-semibold">
                                                    <li >{item1.title}</li>
                                                        {item1.itemCards.map(item2 =>( 
                                                            <div className="m-4 border border-gray-200 rounded-lg hover:bg-slate-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                                                <ul className="grid grid-flow-col grid-cols-2">
                                                                    <div className="m-2"> 
                                                                        <li className="p-1 font-sans">{item2.card.info.name}</li> 
                                                                        <li className="p-1 font-normal">{'₹ '+(item2.card.info.price || item2.card.info.defaultPrice )/100}</li>
                                                                        {(Object.keys(item2.card.info.ratings.aggregatedRating).length > 2) ? (<li className="p-1 font-normal ">{item2.card.info.ratings.aggregatedRating.rating} ({item2.card.info.ratings.aggregatedRating.ratingCountV2})</li>) : <li></li>}
                                                                        <li className="p-1 text-wrap font-normal">{item2.card.info.description}</li>
                                                                       
                                                                    </div>
                                                                    <div className=" flex justify-end relative m-5">
                                                                        {item2.card.info.imageId == null ? (<img className=" w-48 h-32 rounded-lg" src={dummy_image_url}></img>) : (<img className=" w-48 h-32 rounded-lg" src={CDN_DISH_IMG_URL + item2.card.info.imageId}></img>)}
                                                                        <button className=" absolute top-3/4 right-14 bg-zinc-100 text-black rounded mx-2 my-2 px-4 py-1 " onClick={()=>{
                                                                           alert("Clicked")
                                                                        }}>ADD</button>
                                                                    </div>
                                                                </ul>  
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))
                                        )
                                    } 
                                </div>
                            </div>
                        )
                        )
                    } 
                </div> 
                <div className="h-96  border border-gray-300 shadow dark:bg-gray-800 dark:border-gray-700 mx-12 my-10">
                    <h2 className="bg-slate-500 text-white text-center p-2">Card summary </h2>
                    <div>
                        <h4 className="bg-neutral-400 text-center text-white py-14">Resturant Details</h4>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default RestaurantMenu;
