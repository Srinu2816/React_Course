import { useEffect, useState } from "react";
import { REST_MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {

    const [menuInfo, setMenuInfo] = useState(null);

    useEffect(()=> {
        fetchdata();
    }, [])

    const fetchdata = async ()=>{
        const data = await fetch(REST_MENU_API + resId);
        const json_data = await data.json();
        setMenuInfo(json_data);

    }

    return menuInfo; 
}

export default useRestaurantMenu;