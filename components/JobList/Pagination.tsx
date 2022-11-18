import React, { useEffect, useState } from "react";
import LeftArrow from "../../public/assets/leftArrow.svg";
import RightArrow from "../../public/assets/rightArrow.svg";
import styles from "./JobList.module.css";

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
    borderBottom: "2.6px solid #5876C5",
  };
  const Item = { color: "unset", borderBottom: "unset" };
  const disableLeft = pageNumber[0] === currentPage;
  const disableRight = pageNumber[pageNumber.length - 1] === currentPage;

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation} aria-label="Pagination">
          <a className={`${styles.linkArrow}`} style={{ cursor: disableLeft ? "not-allowed": "pointer"}}>
            <LeftArrow
              className={`${styles.arrow} ${
                disableLeft ? styles.disable : ""
              }`}
              aria-hidden="true"
              onClick={() => paginate(currentPage - 1)}
            />
            <div className={styles.borderLeft}></div>
          </a>
          <ul>
            {pageNumber.length > 1 &&
              pageNumber.map((number) => (
                <li
                  onClick={() => paginate(number)}
                  style={number === currentPage ? changeActivePagination : Item}
                  className={styles.numberPaginate}
                  key={number}
                >
                  {number}
                </li>
              ))}
          </ul>
          <a className={styles.linkArrow} style={{ cursor: disableRight ? "not-allowed": "pointer"}}>
            <span className={styles.borderRight}></span>
            <RightArrow
              className={`${styles.arrow} ${
                disableRight
                  ? styles.disable
                  : ""
              }`}
              aria-hidden="true"
              onClick={() => paginate(currentPage + 1)}
            />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
