import React, { useEffect, useState } from "react";
import { JobItemType } from "../JobList/interface";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import ReactStars from "react-star-rating-component";
import moment from "moment";
import Link from "next/link";
import SaveJob from "../saveJobIcon/saveJob";
import styles from "./JobSingleItem.module.css";
import myLoader from "../../loader";

interface locationType {
  city: string;
  country: string;
  name: string;
}

function JobSingleItem(props: {
  item: JobItemType;
  index: number;
  width: number;
}) {
  const { item, index, width } = props;
  const [count, setCount] = useState<number>(0);
  const [addressCity, setAddressCity] = useState<locationType>();

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${item.location.lat}&lon=${item.location.long}&format=json&apiKey=eae15729488a4ad9acf8cacad984499e`
    )
      .then((response) => response.json())
      .then((result) =>
        setAddressCity({
          ...result,
          city: result.results[0].city,
          country: result.results[0].country,
          name: result.results[0].name,
        })
      )
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const starIcon = localStorage.getItem("star" + JSON.stringify(item.id));
    if (starIcon) setCount(JSON.parse(starIcon));
  }, []);

  const reactStarProps = {
    starCount: 5,
    starSize: 18,
    size: 18,
    activeColor: "#38415D",
  };

  const handleChangeStar = (count: number) => {
    setCount(count);
    localStorage.setItem(
      "star" + JSON.stringify(item.id),
      JSON.stringify(count)
    );
  };

  return (
    <li
      key={item.id}
      className={styles.containerWrapper}
    >
      {width > 650 ? (
        <>
          <div className={styles.wrapper}>
            <Link
              className="cursor-pointer flex"
              href={{
                pathname: `job/[id]`,
                query: { id: index },
              }}
            >
              <div className="flex">
                <Image
                  loader={myLoader}
                  src={`${item.pictures[0]}?random=${item.id}`}
                  className={styles.image}
                  alt="department"
                  width={85}
                  height={85}
                />
                <div>
                  <h2 className={styles.title}>
                    {item.title}
                  </h2>
                  <p className={styles.departmentName}>
                    Departament name • {item.name}
                  </p>
                  <div className="flex">
                    <p className={styles.address}>
                      <FiMapPin color="grey" className="mr-[5px]" />{" "}
                      {addressCity?.city}
                      {addressCity?.city ? ", " : ""}
                      {addressCity?.country ?? addressCity?.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.maxStarsContainer}>
              <SaveJob id={item.id} />
              <ReactStars
                {...reactStarProps}
                name={"star"}
                value={count}
                onStarClick={(count) => handleChangeStar(count)}
              />
              <h3 className={styles.datePosted}>
                {" "}
                Posted {moment(item.updatedAt, "YYYYMMDD").fromNow()}
              </h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.wrapper}>
            <div className="flex w-full">
              <div className="w-full">
                <div className={styles.starsContainer}>
                  <ReactStars
                    {...reactStarProps}
                    name={"star"}
                    value={count}
                    onStarClick={(count) => handleChangeStar(count)}
                  />
                  <h3 className={styles.datePosted}>
                    {" "}
                    Posted {moment(item.updatedAt, "YYYYMMDD").fromNow()}
                  </h3>
                </div>
                <Link
                  className="cursor-pointer flex"
                  href={{
                    pathname: `job/[id]`,
                    query: { id: index },
                  }}
                >
                  <Image
                    loader={myLoader}
                    src={`${item.pictures[0]}?random=${item.id}`}
                    className={styles.image}
                    alt="department"
                    width={66}
                    height={66}
                  />
                  <div>
                    <h2 className={styles.title}>
                      {item.title}
                    </h2>
                    <p className={styles.departmentName}>
                      Departament name • {item.name}
                    </p>
                    <div className="flex">
                      <p className={styles.address}>
                        <FiMapPin color="grey" className="mr-[5px]" />{" "}
                        {addressCity?.city}
                        {addressCity?.city ? ", " : ""}
                        {addressCity?.country ?? addressCity?.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default JobSingleItem;
