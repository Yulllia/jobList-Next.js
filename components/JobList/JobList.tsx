import React, { useEffect, useState } from "react";
import { JobItemType } from "./interface";
import JobSingleItem from "../JobItem/JobSingleItem";
import { useWindowDimensions } from "./mediaStyles";

function JobList() {
  const [jobList, setJobList] = useState<JobItemType[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { windowSize } = useWindowDimensions();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!jobList) return <p>No profile data</p>;

  return (
    <div className="bg-[#F5F5F5]">
      <ul className="p-[15px]">
        {!isLoading &&
          jobList?.length &&
          jobList.map((item: JobItemType, index) => {
            return (
              <JobSingleItem
                item={item}
                index={index}
                key={index}
                width={windowSize}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default JobList;
