import React, { useState } from "react";
import { privateRoutes } from "../../../../app/routes/routes";
import LeftsideBarListWrapper from "../atoms/leftside-bar-list-wrapper";
import LeftsideBarItem from "../molecules/leftside-bar-item";

const LeftsideBarList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <LeftsideBarListWrapper>
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
    </LeftsideBarListWrapper>
  );
};

export default LeftsideBarList;
