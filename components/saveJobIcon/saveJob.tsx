import React, { useEffect, useState } from "react";
import FillSaveIcon from "../../public/assets/fillSaveIcon.svg";
import UnfillSaveIcon from "../../public/assets/unfillSaveIcon.svg";

function saveJob(props: { id: string }) {
  const { id } = props;
  const [saveJob, setSaveJob] = useState<boolean>(false);

  const handleSaveClick = () => {
    setSaveJob((saveJob) => !saveJob);
    localStorage.setItem(
        "saveIcon" + JSON.stringify(id),
        JSON.stringify(!saveJob)
    );
  };

  useEffect(() => {
    const bookmark = localStorage.getItem("saveIcon" + JSON.stringify(id));
    if (bookmark) setSaveJob(JSON.parse(bookmark));
  }, []);

  return (
    <div className="cursor-pointer" onClick={handleSaveClick}>
      {saveJob ? <FillSaveIcon /> : <UnfillSaveIcon />}
    </div>
  );
}

export default saveJob;
