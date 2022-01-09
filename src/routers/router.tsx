import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layer from "components/templates/layer/layer";
import ScrollToTop from "./scrollToTop";
import MainPage from "components/pages/main-page/main-page";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="main" element={<Layer />}>
          <Route index element={<MainPage />} />
          {/* <Route path="community" element={<CommunityPage />} />
          <Route path="membership" element={<div>멤버십 페이지</div>} />
          <Route path="service" element={<CompanyServicePage />} />
          <Route
            path="community/recommend/detail"
            element={<RecommendDetail />}
          />
          <Route path="community/popular/detail" element={<PopularDetail />} />
          <Route
            path="community/magazine/detail"
            element={<MagazineDetail />}
          />
          <Route path="mypage" element={<MyPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
