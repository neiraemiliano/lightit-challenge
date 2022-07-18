import React from "react";
import Button from "../../components/Button";
import { IncreaseIcon, DecreaseIcon } from "../../utils/icons";
import ArrowKeys from "../../components/ArrowKeys";
import { handleLogger } from "../../utils/handleLogger";
import { TEXTS } from "../../constants/texts";

const SectionRight = ({ openMenu }) => {
  return (
    <div className="absolute w-full h-full pr-5 justify-end pt-28 pb-5">
      <div className="flex flex-col justify-between float-right h-full">
        <div>
          <div className={`${!openMenu ? "hidden" : ""}`}>
            <Button
              label={TEXTS.SET_BUTTON_TEXT}
              name="set"
              className="ml-5  w-24 justify-center"
              onClick={(e) => handleLogger(e.currentTarget.name)}
            />
            <Button
              label={TEXTS.DELETE_BUTTON_TEXT}
              name="delete"
              className="ml-5 w-24 justify-center"
              onClick={(e) => handleLogger(e.currentTarget.name)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="flex flex-col divide-y divide-[#F3F3F3]">
            <Button
              icon={<IncreaseIcon />}
              name="increase"
              className="px-1 w-8 justify-center rounded-b-none rounded-t-md"
              onClick={(e) => handleLogger(e.currentTarget.name)}
            />
            <Button
              icon={<DecreaseIcon />}
              name="decrease"
              className="px-1 w-8 justify-center rounded-t-none rounded-b-md"
              onClick={(e) => handleLogger(e.currentTarget.name)}
            />
          </div>
          <ArrowKeys />
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
