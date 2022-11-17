import React from "react";
import Border from "../../JobItemStyle/Border";
import ButtonList from "../../JobItemStyle/ButtonList";
import Title from "../../JobItemStyle/Title";
import Text from "../../../components/JobItemStyle/Text";
import ImageItem from "../../JobItemStyle/ImageItem";
import { JobItemType } from "../../JobList/interface";

function MainBlock(props: { jobItem: JobItemType; className: string }) {
  const { jobItem, className } = props;
  
  return (
    <div className={className}>
      <div className="mt-[86px]">
        <Title content={"Additional info"} />
        <Border />
        <div className="mt-[15px]">
          <Text content={"Employment type"} />
        </div>
        <div className="flex mt-[10px]">
          <ButtonList
            item={jobItem.employment_type}
            color={"#55699E"}
            backround={"#a1b1db51"}
            border={"#55699e4d"}
          />
        </div>
        <div className="mt-[23px]">
          <Text content={"Benefits"} />
        </div>
        <div className="flex mt-[10px]">
          <ButtonList
            item={jobItem.benefits}
            color={"#988B49"}
            backround={"#ffcf0026"}
            border={"#ffcf00"}
          />
        </div>
      </div>
      <div className="mt-[87px]">
        <Title content={"Attached images"} />
        <Border />
        <div className="flex mt-[15px] h-[133px]">
          {jobItem.pictures && (
            <ImageItem item={jobItem.pictures} width={200} height={133} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
