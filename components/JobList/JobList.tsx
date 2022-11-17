import React, { useEffect, useMemo, useState } from "react";
import { JobItemType } from "./interface";
import JobSingleItem from "../JobItem/JobSingleItem";
import { useWindowDimensions } from "./mediaStyles";
import Pagination from "./Pagination";

function JobList() {
  const [jobList, setJobList] = useState<JobItemType[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage] = useState(5);
  const { windowSize } = useWindowDimensions();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
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

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentPosts = useMemo(() => jobList?.slice(indexOfFirstPost, indexOfLastPost), [indexOfFirstPost, indexOfLastPost, jobList]);
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  if (isLoading) return <p>Loading...</p>;
  if (!jobList) return <p>No profile data</p>;

  return (
    <div className="bg-[#F5F5F5]">
      <ul className="p-[15px]">
        {!isLoading &&
          currentPosts?.length &&
          currentPosts.map((item: JobItemType, index) => {
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
      <Pagination filterPerPage={jobsPerPage} currentPage={currentPage} total={jobList.length} paginate={paginate}/>
    </div>
  );
}

export default JobList;
