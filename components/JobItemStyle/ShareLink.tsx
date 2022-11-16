import React, { useEffect, useState } from "react";
import Share from "../../public/assets/Share.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRouter } from "next/router";

function ShareLink() {
  const links = useRouter();


  return (
    <div className="flex ml-[31px]">
        <CopyToClipboard text={"http://localhost:3000" + links.asPath}>
          <Share className="cursor-pointer" />
        </CopyToClipboard>
      <span className="pl-[15px]">Share</span>
    </div>
  );
}

export default ShareLink;
