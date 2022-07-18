import Dropdown from "../../components/Dropdown";
import { SAVE_BUTTON } from "../../constants";
import Logo from "./../../assets/logo.png";

const Topbar = () => {
  return (
    <div className="bg-primary px-5 md:px-10 lg:px-20 h-24 z-10 sticky">
      <div className="relative flex items-center justify-between h-24">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img className="pl-10 sm:block h-10 w-auto" src={Logo} alt="logo" />
          </div>
        </div>
        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Dropdown data={SAVE_BUTTON} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
