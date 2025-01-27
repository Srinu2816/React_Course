import { CDN_DISH_IMG_URL, dummy_image_url } from "../../Utils/constant";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='w-12/12 border-y-2 flex p-4'>
          <div className='w-8/12'>
            <div></div>
            <div className=''>
              <span className='m-2 font-semibold'>{item.name}</span>
              <span className='m-2 font-semibold'> ₹ {item.price / 100}</span>
            </div>
            <div className='m-3 '>
              <span className='text-wrap font-light text-base'>
                {item.description}
              </span>
            </div>
          </div>
          <div className='w-4/12 flex justify-center relative'>
            {item.imageId == null ? (
              <img className='w-48 h-32 rounded-lg' src={dummy_image_url}></img>
            ) : (
              <img
                className='w-48 h-32 rounded-lg'
                src={CDN_DISH_IMG_URL + item.imageId}></img>
            )}
            <button
              className=' font-semibold bg-transparent hover:bg-gray-800 hover:text-slate-100 border border-blue-200 hover:border-transparent absolute top-3/4 right-19 bg-zinc-100 text-cyan-700 rounded mx-2 my-2 px-7 py-1 '
              onClick={() => {
                alert("Clicked");
              }}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
