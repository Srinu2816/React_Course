import { useContext } from "react";
import { CDN_URL } from "../../Utils/constant";
import userInfo from "../../Utils/UserContext";

const Cards = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.card?.card?.info;

  const { deliveryTime } = resData?.card?.card?.info?.sla;
  return (
    <div className='m-4 max-w-sm border border-gray-200 rounded-lg hover:bg-slate-200 shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-center h-52'>
        <img
          className='rounded-lg p-2 items-center '
          src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className='p-2'>
        <h4 className='font-bold'>{name}</h4>
        <div className='flex'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='gray'
              viewBox='0 0 24 24'
              stroke-width='1'
              stroke='currentColor'
              class='size-4'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>

            <h6 className='font-normal pl-2 pr-8'>{avgRating}</h6>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-2'>
              <path
                fillRule='evenodd'
                d='M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z'
                clipRule='evenodd'
              />
            </svg>
            <h6 className='px-1'>{deliveryTime} Minutes</h6>
          </div>
        </div>
        <h6 className='font-normal'>{costForTwo}</h6>
        <h6 className=' truncate font-light'>{cuisines.join(", ")}</h6>
      </div>
    </div>
  );
};

export const Localitylabel = (Cards) => {
  return (props) => {
    return (
      <div>
        <label className='bg-black text-white absolute m-2'>Promoted</label>
        <Cards {...props}></Cards>
      </div>
    );
  };
};

export default Cards;
