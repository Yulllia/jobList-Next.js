import React from "react";
import classnames from "classnames";
import Image from "next/image";

interface ImageProps {
  item: string[] | string | undefined;
  width: number;
  height: number;
}

function ImageItem(props: ImageProps) {
  const { item, width, height } = props;
  return (
    <>
      {Array.isArray(item) ? (
        item.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Image
                src={`${item ?? ""}?random=${index}`}
                className={`bg-cover bg-center rounded-lg w-[${width}px] h-[${height}px] mr-[12px]`}
                alt="department"
                width={width}
                height={height}
              />
            </React.Fragment>
          );
        })
      ) : (
        <React.Fragment>
          <Image
            src={`${item}`}
            className={`rounded-lg object-cover w-[${width}] h-[${height}]`}
            alt="department"
            width={width}
            height={height}
          />
        </React.Fragment>
      )}
    </>
  );
}

export default ImageItem;
