import React, { useEffect, useState } from "react";
import LeftArrow from "../../public/assets/leftArrow.svg";
import RightArrow from "../../public/assets/rightArrow.svg";

export interface Paginate {
  filterPerPage: number;
  total: number;
  paginate: (pageNumber: React.SetStateAction<number>) => void;
  currentPage: number;
}

function Pagination({ filterPerPage, total, paginate, currentPage }: Paginate) {
  const [pageNumber, setPageNumber] = useState<Array<number>>([1]);

  useEffect(() => {
    const page: Array<number> = [];
    for (let i = 1; i <= Math.ceil(total / filterPerPage); i++) {
      page.push(i);
    }
    setPageNumber(page);
  }, [filterPerPage, total]);

  const changeActivePagination = {
    color: "#5876C5",
    borderBottom: "2.6px solid #5876C5"
  }
  const Item = { color: "unset", borderBottom: "unset" }

  return (
    <div className="max-[649px]:mt-[26px] max-[649px]:pb-[17px] px-[18px] mx-auto justify-between min-[650px]:mt-[49px] min-[650px]:pb-[64px] sm:px-6">
      <div className="items-center flex justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              className="relative inline-flex items-center rounded-l-md  bg-white px-[30px] py-2 text-sm font-medium text-gray-500 focus:z-20"
            >
              <LeftArrow className="max-[650px]:hidden h-5 w-5" aria-hidden="true" />
              <div className="w-[1.3px] h-[31.2px] ml-[52px] border bg-[#DEE3EF]"></div>
            </a>
            <ul >
              {pageNumber.length > 1 &&
                pageNumber.map((number) => (
                  <li
                    onClick={() => paginate(number)}
                    style={number === currentPage ? changeActivePagination : Item}
                    className="active:text-[#5876C5] cursor-pointer h-[100%] max-[650px]:w-[24px] min-[650px]:w-[31px] relative inline-flex items-center bg-white px-2 py-2 text-[20.8px] leading-[25px] text-[#70778B] hover:bg-gray-50 focus:z-20"
                    key={number}
                  >
                    {number}
                  </li>
                ))}
            </ul>
            <a
              className="relative inline-flex items-center rounded-l-md  bg-white px-[30px] py-2 text-sm font-medium text-gray-500 focus:z-20"
            >
              <span className="w-[1.3px] h-[31.2px] mr-[52px]  border bg-[#DEE3EF]"></span>
              <RightArrow className="max-[650px]:hidden  h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
      </div>
    </div>
  );
}

export default Pagination;
