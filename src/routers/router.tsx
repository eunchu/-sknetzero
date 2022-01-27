import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layer from "components/templates/layer/layer";
import ScrollToTop from "./scrollToTop";
import MainPage from "components/pages/main-page/main-page";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layer />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
