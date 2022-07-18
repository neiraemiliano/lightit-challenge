import * as React from "react";

const Button = ({
  label,
  icon,
  iconSvg,
  onClick,
  className,
  classNameLabel,
  classNameIcon,
  ...props
}) => {
  return (
    <button
      className={`${className} bg-white rounded-md h-10 items-center relative inline-flex hover:bg-button-hover text-[#7A7A7A]`}
      onClick={onClick}
      {...props}
    >
      {icon && icon}
      {label && <p className={classNameLabel}>{label}</p>}
      {iconSvg && (
        <img src={iconSvg} alt="iconSvg" className={classNameIcon}></img>
      )}
    </button>
  );
};

export default Button;
