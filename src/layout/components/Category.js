import { Transition } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { MENU_DATA } from "../../constants";
import { ArrowLeftIcon } from "../../utils/icons";
import ArrowIconSvg from "./../../assets/icons-svg/arrow-icon.svg";

const Category = (props) => {
  const {
    openMenu,
    setOpenMenu,
    category,
    showItems,
    setShowItems,
    setCategory,
  } = props;

  const categories = useSelector((state) => state[MENU_DATA[category]]);

  const [objectSelected, setObjectSelected] = useState(null);

  const handleItems = (item) => {
    setObjectSelected(item);
    setShowItems(true);
  };

  const onClose = () => {
    setCategory(null);
    setOpenMenu(false);
  };

  return (
    <Transition.Root show={openMenu} as={Fragment}>
      <div className="block w-full px-5 pb-10 pt-2 sm:col-span-5 bg-button-hover sm:h-full sm:pt-28 sm:px-8">
        <div className={`${showItems ? "hidden" : ""} grid gap-5`}>
          <div className="text-title font-extrabold text-lg">
            <p>{category}</p>
          </div>
          {categories &&
            categories.data.map((item, index) => (
              <Button
                key={index}
                label={item.name}
                className="shadow-sm px-3 justify-between text-sm md:text-base"
                iconSvg={ArrowIconSvg}
                onClick={() => handleItems(item)}
              />
            ))}
        </div>

        <div className={`${!showItems ? "hidden" : ""}`}>
          <div
            className="text-title text-sm flex flex-row items-center text-center"
            onClick={() => setShowItems(false)}
          >
            <Button
              icon={<ChevronLeftIcon className="h-4 text-[#B4B4B4] mb-[2px]" />}
              label={category}
              className="bg-button-hover"
              classNameLabel="text-[14px] font-bold text-[#B4B4B4]"
            />
          </div>
          <div className="text-title font-extrabold text-lg">
            <p>{objectSelected?.name}</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 justify-items-center">
            {objectSelected &&
              objectSelected.items.map(({ name, img }, index) => (
                <div key={index} className="text-center">
                  <img
                    src={img}
                    alt="img"
                    className="h-[15vw] sm:h-[8vw] md:h-[9vw] sm:w-[8vw]"
                  ></img>
                  <div className="hidden md:block text-[12px] text-gray pt-1">
                    {name}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className=" absolute sm:left-[38vw] sm:top-[50%] w-full sm:w-auto ml-[-25px] sm:ml-0 text-center">
          <button onClick={() => onClose()} className="button-menu">
            <ArrowLeftIcon className="rotate-90 sm:rotate-0 h-5 absolute sm:top-9 block sm:right-1 z-10" />
          </button>
        </div>
      </div>
    </Transition.Root>
  );
};

export default Category;
