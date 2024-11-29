import React from "react";
import styles from "../Column/Column.module.css";
import AddIcon from "../../assets/add.svg";
import ThreeDots from "../../assets/3dotmenu.svg";
import DoneIcon from "../../assets/Done.svg";
import InProgressIcon from "../../assets/in-progress.svg";
import CancelledIcon from "../../assets/Cancelled.svg";
import TodoIcon from "../../assets/To-do.svg";
import BacklogIcon from "../../assets/Backlog.svg";
import NoPriorityIcon from "../../assets/No-priority.svg";
import LowPriorityIcon from "../../assets/Img - Low Priority.svg";
import MediumPriorityIcon from "../../assets/Img - Medium Priority.svg";
import HighPriorityIcon from "../../assets/Img - High Priority.svg";
import UrgentIcon from "../../assets/SVG - Urgent Priority colour.svg";

import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

// Mapping status titles to their corresponding SVGs
const icons = {
  Done: <img src={DoneIcon} alt="Done" className={styles.icon} />,
  "In progress": <img src={InProgressIcon} alt="In Progress" className={styles.icon} />,
  Canceled: <img src={CancelledIcon} alt="Canceled" className={styles.icon} />,
  Todo: <img src={TodoIcon} alt="To-Do" className={styles.icon} />,
  Backlog: <img src={BacklogIcon} alt="Backlog" className={styles.icon} />,
  "No priority": <img src={NoPriorityIcon} alt="No Priority" className={styles.icon} />,
  Low: <img src={LowPriorityIcon} alt="Low Priority" className={styles.icon} />,
  Medium: <img src={MediumPriorityIcon} alt="Medium Priority" className={styles.icon} />,
  High: <img src={HighPriorityIcon} alt="High Priority" className={styles.icon} />,
  Urgent: <img src={UrgentIcon} alt="Urgent" className={styles.icon} />,
};

// Function to get the correct icon for a status
const getStatusIcon = (status) => icons[status] || null;

const Column = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className={styles.dot}>
          {grouping === "user" ? (
            <AvatarWithStatus statusColor={"green"} grouping={grouping} indashBoard={true} />
          ) : (
            getStatusIcon(title)
          )}
        </div>

        <div className={styles.name_label}>
          <h5>{title}</h5>
          <h5 className={styles.heading}>{tickets.length}</h5>
        </div>

        <div className={styles.icon_buttons}>
          <img src={AddIcon} alt="Add" className={styles.icon} />
          <img src={ThreeDots} alt="Options" className={styles.icon} />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets?.map((ticket, i) => (
          <FeatureRequestCard
            key={i}
            id={ticket.id}
            tag={ticket.tag.join("")}
            title={
              <div className={styles.card_title}>
                {getStatusIcon(ticket.status)}
                <span>{ticket.title}</span>
              </div>
            }
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
