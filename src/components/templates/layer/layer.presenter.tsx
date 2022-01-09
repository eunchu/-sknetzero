import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/molecules/header/header";

const Layer = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <div>footer</div>
    </Fragment>
  );
};

export default Layer;
