import React, { useEffect, useState } from "react";
import FillSaveIcon from "../../public/assets/fillSaveIcon.svg";
import UnfillSaveIcon from "../../public/assets/unfillSaveIcon.svg";
import ToolTip from "./ToolTip";

function SaveJob(props: { id: string }) {
  const { id } = props;
  const [saveJob, setSaveJob] = useState<boolean>(false);

  useEffect(() => {
    const bookmark = localStorage.getItem("saveIcon" + JSON.stringify(id));
    if (bookmark) setSaveJob(JSON.parse(bookmark));
  }, [id]);

  const handleSaveClick = () => {
    setSaveJob((saveJob) => !saveJob);
    localStorage.setItem(
      "saveIcon" + JSON.stringify(id),
      JSON.stringify(!saveJob)
    );
  };
  return (
    <ToolTip tooltip={!saveJob ? "Save bookmark" : ""}>
    <div className="cursor-pointer" onClick={handleSaveClick}>
        {saveJob ? <FillSaveIcon /> : <UnfillSaveIcon />}
    </div>
    </ToolTip>
  );
}

export default SaveJob;
