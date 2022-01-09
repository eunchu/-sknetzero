import { useMediaQuery } from "react-responsive";

interface Props {
  children: typeof Element | any;
}

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
const Desktop = ({ children }: Props) => {
  const isNotMobile = useMediaQuery({ minWidth: 769 });
  return isNotMobile ? children : null;
};

export { Desktop, Mobile };
