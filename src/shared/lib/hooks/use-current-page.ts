import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { IRoute, privateRoutes } from "../../../app/routes/routes";

const useCurrentPage = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<IRoute>(
    Object.values(privateRoutes).find(
      (link: IRoute) => link.path === history.location.pathname
    ) ?? privateRoutes[0]
  );

  useEffect(() => {
    return history.listen((location) => {
      setCurrentPage(
        Object.values(privateRoutes).find(
          (link: IRoute) => link.path === location.pathname
        ) ?? privateRoutes[0]
      );
    });
  }, [history]);

  return currentPage;
};

export default useCurrentPage;
