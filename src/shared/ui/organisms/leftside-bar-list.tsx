import React, { useState } from "react";
import { privateRoutes } from "../../../app/routes/routes";
import LeftsideBarItem from "../moleculas/leftside-bar-item";

const LeftsideBarList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="leftside-bar-list">
      {privateRoutes.map(({ icon, id, title, path }) => {
        return (
          <LeftsideBarItem
            key={id}
            id={id}
            icon={icon}
            title={title}
            path={path}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      })}
    </div>
  );
};

export default LeftsideBarList;
