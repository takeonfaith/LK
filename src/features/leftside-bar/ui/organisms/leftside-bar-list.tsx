import React, { memo, useState } from "react";
import { FiCompass } from "react-icons/fi";
import { IRoute, IRoutes, privateRoutes } from "../../../../app/routes/routes";
import { useSettings } from "../../../../shared/lib/contexts/settings-context";
import LeftsideBarListWrapper from "../atoms/leftside-bar-list-wrapper";
import LeftsideBarItem from "../molecules/leftside-bar-item";
import LeftsideBarDropdown from "./leftside-bar-dropdown";

export function getChosenRoutes(ids: number[]) {
  return ids.reduce((acc: IRoutes, id) => {
    const privateRoute = privateRoutes[id];

    if (privateRoute) {
      acc[id] = privateRoute;
    }

    return acc;
  }, {});
}

export function getNotChosenRoutes(ids: number[]): IRoutes {
  return Object.values(privateRoutes).reduce((acc, route: IRoute) => {
    if (!ids.includes(route.id)) acc[route.id] = route;

    return acc;
  }, {});
}

const LeftsideBarList = memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const { setting } = useSettings<number[]>("menu");

  return (
    <LeftsideBarListWrapper>
      {Object.values(getChosenRoutes(setting)).map(
        ({ icon, id, title, path }) => {
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
        }
      )}
      <LeftsideBarDropdown
        heading={
          <LeftsideBarItem
            key={0}
            id={0}
            icon={FiCompass}
            title={"Другое"}
            path={"/home"}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        }
        height={Object.values(getNotChosenRoutes(setting)).length * 54}
      >
        {Object.values(getNotChosenRoutes(setting)).map(
          ({ icon, id, title, path }) => {
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
          }
        )}
      </LeftsideBarDropdown>
    </LeftsideBarListWrapper>
  );
});

export default LeftsideBarList;
