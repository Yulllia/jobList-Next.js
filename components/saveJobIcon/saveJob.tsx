import React, { useEffect, useState } from "react";
import FillSaveIcon from "../../public/assets/fillSaveIcon.svg";
import UnfillSaveIcon from "../../public/assets/unfillSaveIcon.svg";

function SaveJob(props: { id: string }) {
  const { id } = props;
  const [saveJob, setSaveJob] = useState<boolean>(false);

  
  useEffect(() => {
    const bookmark = localStorage.getItem("saveIcon" + JSON.stringify(id));
    if (bookmark) setSaveJob(JSON.parse(bookmark));
  }, []);


  const handleSaveClick = () => {
    setSaveJob((saveJob) => !saveJob);
    localStorage.setItem(
        "saveIcon" + JSON.stringify(id),
        JSON.stringify(!saveJob)
    );
  };
  return (
    <div className="cursor-pointer" onClick={handleSaveClick}>
      {saveJob ? <FillSaveIcon /> : <UnfillSaveIcon />}
    </div>
  );
}

export default SaveJob;
