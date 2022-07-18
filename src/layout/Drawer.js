import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { aberturasRequestData } from "../store/slices/aberturas/aberturas";
import { equipamientoRequestData } from "../store/slices/equipamiento/equipamiento";
import { terminacionesRequestData } from "../store/slices/terminaciones/terminaciones";
import Menu from "./components/Menu";
import SectionRight from "./components/SectionRight";
import Topbar from "./components/Topbar";

const Drawer = () => {
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    dispatch(aberturasRequestData());
    dispatch(equipamientoRequestData());
    dispatch(terminacionesRequestData());
  }, []);

  return (
    <div>
      <Topbar />
      <div className="bg-secondary flex fixed h-full top-0 bottom-0 left-0 right-0">
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <SectionRight openMenu={openMenu} />
      </div>
    </div>
  );
};

export default Drawer;
