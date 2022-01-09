import { errorBoundary } from "hocs";

import LayerPresenter from "./layer.presenter";

const Layer = () => {
  return <LayerPresenter />;
};

errorBoundary(Layer);

export default Layer;
