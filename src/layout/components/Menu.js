import { useState } from "react";
import { MENU } from "../../constants";
import Category from "./Category";

const Menu = (props) => {
  const { openMenu, setOpenMenu } = props;

  const [category, setCategory] = useState(null);
  const [showItems, setShowItems] = useState(false);

  const handleMenu = (name) => {
    setCategory(name);
    setShowItems(false);
    setOpenMenu(true);
  };

  return (
    <div className="z-10 h-[24vw] w-full sm:h-auto sm:w-auto">
      <div className="absolute pt-24 sm:p-0 sm:grid sm:grid-cols-6 w-full sm:w-[38vw] sm:h-full">
        <div className="sm:flex sm:col-span-1 bg-white h-20 sm:h-full sm:flex-col sm:justify-center  sm:px-0  pt-5 w-full px-5 flex justify-between">
          {MENU.map(({ name, icon }, index) => (
            <button
              key={index}
              onClick={() => handleMenu(name)}
              className={`${
                category === name ? "box sm:bg-button-hover" : ""
              }  relative flex flex-col sm:hover:bg-button-hover items-center my-2 sm:my-1 lg:my-0 justify-center h-[6vw] focus:outline-none bg-white sm:focus:bg-button-hover`}
            >
              <div className="w-8">{icon}</div>
              <p className="text-[10px] text-gray sm:hidden lg:block">{name}</p>
            </button>
          ))}
        </div>
        <Category
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          category={category}
          setCategory={setCategory}
          showItems={showItems}
          setShowItems={setShowItems}
        />
      </div>
    </div>
  );
};

export default Menu;
