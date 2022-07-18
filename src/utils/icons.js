import React from "react";
import Arrow from "./../assets/icons-png/arrow-icon.png";
import Increase from "./../assets/icons-png/increase-icon.png";
import Decrease from "./../assets/icons-png/decrease-icon.png";
import Aberturas from "./../assets/icons-png/aberturas-icon.png";
import Terminaciones from "./../assets/icons-png/terminaciones-icon.png";
import Equipamiento from "./../assets/icons-png/equipamiento-icon.png";
import ArrowLeft from "./../assets/icons-png/arrow-left-icon.png";

export const ArrowIcon = () => {
  return (
    <React.Fragment>
      <img src={Arrow} alt="arrow-icon"></img>
    </React.Fragment>
  );
};

export const IncreaseIcon = () => {
  return (
    <React.Fragment>
      <img src={Increase} alt="increase-icon"></img>
    </React.Fragment>
  );
};

export const DecreaseIcon = () => {
  return (
    <React.Fragment>
      <img src={Decrease} alt="decrease-icon"></img>
    </React.Fragment>
  );
};

export const AberturasIcon = () => {
  return (
    <React.Fragment>
      <img src={Aberturas} alt="aberturas-icon"></img>
    </React.Fragment>
  );
};

export const EquipamientoIcon = () => {
  return (
    <React.Fragment>
      <img src={Equipamiento} alt="equipamiento-icon"></img>
    </React.Fragment>
  );
};

export const TerminacionesIcon = () => {
  return (
    <React.Fragment>
      <img src={Terminaciones} alt="terminaciones-icon"></img>
    </React.Fragment>
  );
};

export const ArrowLeftIcon = (props) => {
  return (
    <React.Fragment>
      <img src={ArrowLeft} alt="arrow-left-icon" {...props}></img>
    </React.Fragment>
  );
};
