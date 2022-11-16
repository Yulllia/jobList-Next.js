import React from "react";
import { FiMapPin } from "react-icons/fi";
import Circle from "../../public/assets/circle.svg";
import { JobItemType } from "../JobList/interface";

function Map(props: { jobItem: JobItemType }) {
  const { jobItem } = props;
  return (
    <>
      <Circle className="absolute top-0 left-0 -z-10" />
      <div className="flex px-[63px] flex-col min-w-[277px] z-20 mx-auto justify-column items-center pt-[31px] text-[#E7EAF0]">
        <p className="fond-bold text-[20px] tracking-[-0.625px] leading-[25px]">
          Department name.
          <br /> {jobItem.name}.
        </p>
        <span className="flex font-normal items-center text-[18px] leading-[24px]">
          <FiMapPin color="grey w-[13px] h-[18px]" />
          {jobItem.address}
        </span>
        <p className="flex font-normal items-center text-[18px] leading-[24px]">
          {jobItem.phone}
        </p>
        <p className="flex font-normal items-center text-[18px] leading-[24px]">
          {jobItem.email}
        </p>
      </div>
      <div id="map" style={{ height: "100px" }} className="h-[100px]"></div>
      <iframe
        className={
          "w-full h-[218px] bg-[#2A3047] rounded-b-lg grayscale-[100%] invert-[100%] contrast-[80%] lg:max-w-[402px]"
        }
        src={`//maps.google.com/maps?q=${jobItem.location.lat},${jobItem.location.long}&z=4&amp&output=embed`}
      ></iframe>
    </>
  );
}

export default Map;
