import React from "react";
import classnames from "classnames";

interface ButtonList {
  item: string[] | string | undefined;
  color: string;
  backround: string;
  border: string;
}

function ButtonList(props: ButtonList) {
  const { item, color, backround, border } = props;

  return (
    <>
      {Array.isArray(item) ? (
        item.map((item, index) => {
          return (
            <div
              style={{backgroundColor: backround, borderColor: border }}
              key={index}
              className={'items-center lg:px-[78.5px] max-[650px]:px-[25px] py-[16.5px] mr-[8px] rounded-lg border border-[1px]]'}
            >
              <p
                style={{color: color}}
                className={'text-[16px] tracking-[-0.457143px] leading-[16px]'}
              >
                {item}
              </p>
            </div>
          );
        })
      ) : (
        <div
          style={{backgroundColor: backround, borderColor: border }}
          className={'items-center px-[78.5px] py-[16.5px] mr-[8px] rounded-lg border border-[1px]]'}
        >
          <p
            style={{color: color}}
            className={'text-[16px] items-center align-middle tracking-[-0.457143px] leading-[16px]'}
          >
            {item}
          </p>
        </div>
      )}
    </>
  );
}

export default ButtonList;
