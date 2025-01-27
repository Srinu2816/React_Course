import { useState } from "react";
import ItemList from "./itemlist";

ItemList;
const CardsCatagory = ({ data }) => {
  const list = data.card?.card;
  // console.log("list", list);

  const filteredCategories =
    list.categories !== undefined
      ? list.categories?.map((item) => item.itemCards)
      : [];
  // console.log("filteredCategories", filteredCategories);

  const levelDown = filteredCategories?.flatMap((item) =>
    Array.isArray(item) ? item.map((item1) => item1.card.info) : []
  );

  // console.log("levelDown--", levelDown);

  const itemList =
    list.itemCards !== undefined
      ? list.itemCards?.map((item) => item.card?.info)
      : [];

  // console.log("itemList", itemList);

  const finallist = [...levelDown, ...itemList];
  // console.log("finallist", finallist);

  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className='flex justify-center'>
      <div className='w-7/12 mx-12 my-4 bg-gray-100 shadow-lg'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <spam className='p-2 font-bold text-base'>
            {list.title} ({list.itemCards?.length || list.categories.length})
          </spam>
          <spam className='p-2'>⬇️</spam>
        </div>
        <div className='p-2'>{showItems && <ItemList items={finallist} />}</div>
      </div>
    </div>
  );
};

export default CardsCatagory;
