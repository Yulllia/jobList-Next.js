import React from "react";
import Share from "../../public/assets/Share.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import ToolTip from "./ToolTip";
import { useState } from "react";
import { siteLink } from "../JobList/interface";

function ShareLink() {
  const [clicked, setClicked] = useState<boolean>(false);
  const links = useRouter();
  const tooltipText = clicked ? "Copied!" : "Click to copy link";

  return (
    <div className="flex ml-[31px]">
      <ToolTip tooltip={tooltipText}>
        <CopyToClipboard text={siteLink + links.asPath}>
          <Share className="cursor-pointer" onClick={() => setClicked(true)} />
        </CopyToClipboard>
      </ToolTip>
      <span className="pl-[15px]">Share</span>
    </div>
  );
}

export default ShareLink;
