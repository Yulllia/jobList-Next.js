import { useRouter } from "next/router";
import React from "react";

function ButtonReturn() {
  const router = useRouter();

  function routeBack(e: { preventDefault: () => void; }){
    e.preventDefault();
    router.push('/')
  }
  return (
    <button
      onClick={routeBack}
      className="pt-[18px] pb-[16px] pr-[26px] pl-[23px] items-center uppercase cursor-pointer rounded-[8px] bg-[rgba(57,70,100,0.14)]"
    >
      <p className="items-center">
        <i className="rotate-[135deg] border border-r-[3px] border-r-[#384564] border-t-[0px] border-b-[#384564] border-b-[3px] border-l-[0px] p-[5px] inline-block"></i>
        <span className="text-[#3A4562] pl-[15px]">Return to Job Board</span>
      </p>
    </button>
  );
}

export default ButtonReturn;
