import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./DropDownModal.module.css";

import ChevronDownIcon from "../../assets/down.svg"; 
import SettingsIcon from "../../assets/Display.svg"; 

const DropDownModal = ({ setGrouping, setOrdering, ordering, grouping }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const componentRef = useRef(null);

  const openDropdown = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onClickOutSide = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", onClickOutSide);

    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  }, [onClickOutSide]);

  const onGroupingChange = useCallback((e) => {
    setGrouping(e.target.value);
    console.log("hii");
  }, []);

  const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);

  return (
    <div className={styles.display_dropdown} ref={componentRef}>
      <div
        className={styles.dropdown_label_container}
        onClick={() => {
          openDropdown();
          console.log("yyyyy");
        }}
      >
        {/* Use custom SVG for Settings Icon */}
        <img src={SettingsIcon} alt="Settings" className={styles.icon} style={{ transform: "rotate(90deg)" }} />
        <div>Display</div>
        {/* Use custom SVG for Chevron Down Icon */}
        <img src={ChevronDownIcon} alt="Chevron Down" className={styles.icon} />
      </div>

      {isModalOpen && (
        <div className={styles.dropdown_content_container}>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Grouping</div>
            <select
              name="grouping"
              id="grouping"
              value={grouping}
              onChange={onGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Ordering</div>
            <select
              name="ordering"
              id="ordering"
              value={ordering}
              onChange={onOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownModal;

