import { useCallback, useContext, useState } from "react";
import { HEADER_LOGO } from "../../Utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useOnlineStatus();

  const { loggedIn } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='flex justify-between w-auto bg-blue-200'>
      <div className='logo-container'>
        <img className='size-16 m-2' src={HEADER_LOGO}></img>
      </div>
      <div className='flex items-center'>
        <ul className='flex mx-4'>
          <li className='px-4'>Online Status : {status ? "✅" : "🔴"}</li>
          <li className='px-4'>
          <Link to='/Dashboard'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li className='px-4'>
            <Link to='/About'>About us</Link>
          </li> 
          <li className='px-4 font-bold '>
            <Link to={"/Cart"}> Cart-({cartItems.length}) </Link>
          </li>
          <li className='px-4 '>
            <Link to={"/"}> Login</Link>
          </li>

          {/* <button
            className='bg-sky-500 hover:bg-sky-700 rounded-md px-4 pb-1'
            onClick={() => {
              console.log(btnName);
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>
            {btnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
