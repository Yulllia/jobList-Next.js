import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/JobItemStyle/Button";
import Title from "../../components/JobItemStyle/Title";
import Border from "../../components/JobItemStyle/Border";
import ButtonReturn from "../../components/JobItemStyle/ButtonReturn";
import { JobItemType } from "../../components/JobList/interface";
import { useWindowDimensions } from "../../components/JobList/mediaStyles";
import Header from "../../components/JobDetail/header/Header";
import MainBlock from "../../components/JobDetail/mainBlock/MainBlock";
import Map from "../../components/JobItemStyle/Map";
import styles from "./JobItem.module.css"

function JobItem() {
  const router = useRouter();
  const id = router.query.id as String;
  const [jobItem, setJobItem] = useState<JobItemType>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { windowSize } = useWindowDimensions();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobItem(data[+id]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!jobItem) return <p>No Job Item found</p>;

  return (
    <div className={styles.container}>
      {!isLoading && jobItem && (
        <>
          <div className={windowSize > 1100 ? "flex justify-around": ""}>
            {windowSize > 650 ? (
              <>
                <div>
                  <div className={styles.headerContainer}>
                    <Header
                      windowSize={windowSize}
                      jobItem={jobItem}
                      header={styles.header}
                      divClassName={styles.divClassName}
                    />
                    <MainBlock jobItem={jobItem} className={"flex flex-col"} />
                    <div className={styles.buttonBlock}>
                      <ButtonReturn />
                    </div>
                  </div>
                </div>
                <div className={styles.mapContainer}>
                  <Map jobItem={jobItem} />
                </div>
              </>
            ) : (
              <>
                <Header
                  windowSize={windowSize}
                  jobItem={jobItem}
                  divClassName={
                    styles.minDivClassName
                  }
                />
                <Button />
                <MainBlock
                  jobItem={jobItem}
                  className={"flex flex-col-reverse"}
                />
                <div className="mt-[63px]">
                  <Title content={"Contacts"} />
                </div>
                <Border />
                <div className={styles.minMapContainer}>
                  <Map jobItem={jobItem} />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default JobItem;
