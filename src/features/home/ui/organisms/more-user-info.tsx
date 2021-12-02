import React, { memo, useMemo, useState } from "react";
import { User } from "../../../../entities/user/model";
import Slider from "../../../slider/molecules/slider";
import { MoreInfoContent } from "../atoms/more-info";
import AllInfo from "../molecules/all-info";
import Orders from "../molecules/orders";

export default memo(MoreUserInfo);

interface Props {
  user: User;
}

function MoreUserInfo({ user }: Props) {
  const [indexPage, setIndexPage] = useState<number>(0);
  const pages = useMemo(
    () => [<AllInfo user={user} />, <Orders orders={user.orders} />],
    [user]
  );

  return (
    <MoreInfoContent>
      <Slider
        pages={["Учетная карточка", "Приказы"]}
        currentPage={indexPage}
        setCurrentPage={setIndexPage}
      />
      {pages[indexPage]}
    </MoreInfoContent>
  );
}
