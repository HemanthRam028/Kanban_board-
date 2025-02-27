
import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  return (
    <>
      {indashBoard ? (<div className={styles.avatarContainer}>
        <img
          src={
            "data:image/png;base64,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"
          }
          alt="MG"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div>) : (<div></div>)}


      {
      }

      {}
    </>
  );
};

export default AvatarWithStatus;
