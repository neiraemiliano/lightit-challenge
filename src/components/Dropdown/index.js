import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ data }) => {
  return (
    <>
      {data && (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white hover:bg-button-hover text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 sm:divide-x sm:divide-[#F3F3F3]">
              <p className="hidden sm:block text-gray">{data[0].name}</p>
              <ChevronDownIcon
                className="sm:-mr-1 sm:ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {data.map((item, index) => (
                <div className="py-1" key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active ? "bg-button-hover" : "",
                          "block px-4 py-2 text-sm text-gray"
                        )}
                      >
                        {item.name}
                      </p>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
};

export default Dropdown;
