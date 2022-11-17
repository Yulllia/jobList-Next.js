import React from "react";
import Border from "../../JobItemStyle/Border";
import Button from "../../JobItemStyle/Button";
import ShareLink from "../../JobItemStyle/ShareLink";
import Title from "../../JobItemStyle/Title";
import { JobItemType } from "../../JobList/interface";
import moment from "moment";
import Text from "../../../components/JobItemStyle/Text";
import styles from "./Header.module.css";
import SaveJob from "../../JobItemStyle/SaveJob";


function Header(props: {
  jobItem: JobItemType;
  windowSize: number;
  divClassName: string;
  header?: string;
}) {
  const { jobItem, windowSize, header, divClassName } = props;

  function dataSalary() {
    const salaries = jobItem?.salary as String;
    const salary = salaries?.replaceAll("k", " 000");
    return salary;
  }

  function newlineText() {
    const description = jobItem?.description as String;
    const textStyle = "font-bold mt-[20px] mb-[5px]";
    const newText = description?.split("\n").map((str, index) => (
      <p
        key={index}
        className={`${
          (str.includes("Responsopilities:") && textStyle) ||
          (str.includes("Compensation & Benefits:") && textStyle)
        }`}
      >
        {str}
      </p>
    ));
    return newText;
  }

  return (
    <>
      <header className={header}>
        <Title content={"Job Details"} />
        {windowSize < 650 && <Border margin={"12px"} />}
        <div className={divClassName}>
          <span className="pr-[16px]">
            <SaveJob id={jobItem.id} />
          </span>
          <span>Save to my list</span>
          <ShareLink />
        </div>
      </header>
      {windowSize < 650 ? (
        <>
          <div>
            <h3 className={styles.title}>{jobItem.title}</h3>
            <div className={styles.detailBlock}>
              <p className={styles.dataUpdate}>
                Posted {moment(jobItem.updatedAt, "YYYYMMDD").fromNow()}
              </p>
              <div>
                <p className={styles.salary}>€ {dataSalary()}</p>
                <Text content={"Brutto, per year"} />
              </div>
            </div>
          </div>
          <div className={styles.text}>{newlineText()}</div>
        </>
      ) : (
        <>
          <Border />
          <Button />
          <div className={styles.detailBlock}>
            <h3 className={styles.title}>{jobItem.title}</h3>
            <div>
              <p className={styles.salary}>€ {dataSalary()}</p>
              <Text content={"Brutto, per year"} />
            </div>
          </div>
          <p className={styles.dataUpdate}>
            Posted {moment(jobItem.updatedAt, "YYYYMMDD").fromNow()}
          </p>
          <div className={styles.text}>{newlineText()}</div>
        </>
      )}
    </>
  );
}

export default Header;
