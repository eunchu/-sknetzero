import { errorBoundary } from "hocs";

import HeaderPresenter from "./header.presenter";

const Header = () => {
  return <HeaderPresenter />;
};

errorBoundary(Header);

export default Header;
