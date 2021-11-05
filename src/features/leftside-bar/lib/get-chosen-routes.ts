import { IRoutes, privateRoutes } from "../../../app/routes/routes";

const getChosenRoutes = (ids: number[]) => {
  return ids.reduce((acc: IRoutes, id) => {
    const privateRoute = privateRoutes[id];

    if (privateRoute) {
      acc[id] = privateRoute;
    }

    return acc;
  }, {});
};

export default getChosenRoutes;
