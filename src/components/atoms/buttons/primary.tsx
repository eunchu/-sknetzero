import styled from "styled-components";

import { BasicTheme } from "theme";

// Style >>>
interface ContainerProps {
  style: {
    width: string;
    height: string;
    fontSize: string;
    radius: string;
    bgColor: string;
    color: string;
  };
  disable: boolean;
}
const Container = styled.div<ContainerProps>`
  width: ${(props) => props.style.width};
  height: ${(props) => props.style.height};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.style.fontSize};
  font-weight: 700;

  color: ${(props) => props.style.color};
  background-color: ${(props) => props.style.bgColor};
  border-radius: ${(props) => props.style.radius};

  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  user-select: none;
  &:hover {
    background-color: ${(props) =>
      !props.disable && props.theme.color.primary_600};
  }
  &:active {
    background-color: ${(props) =>
      !props.disable && props.theme.color.primary_800};
  }
`;
// Style <<<

interface Props {
  size?: string; // default | middle | small | xsmall
  width?: number;
  disable?: boolean;
  children: string;
}
const ButtonPrimary = ({
  size = "default",
  width,
  disable = false,
  children,
}: Props) => {
  // Size별 스타일 정의
  const disbleBgBySize =
    size === "default" ? BasicTheme.color.gray_200 : BasicTheme.color.gray_300;
  const radiusBySize =
    size === "default"
      ? BasicTheme.shape.radius.button
      : BasicTheme.shape.radius.button_small;
  const disableColor =
    size === "default" ? BasicTheme.color.gray_400 : BasicTheme.color.white;
  let style = {
    width: `${width}px` || "100%",
    height: "64px",
    fontSize: "16px",
    radius: radiusBySize,
    bgColor: !disable ? BasicTheme.color.primary_700 : disbleBgBySize,
    color: !disable ? BasicTheme.color.white : disableColor,
  };
  switch (size) {
    case "middle":
      style = {
        ...style,
        height: "46px",
        fontSize: "15px",
      };
      break;
    case "small":
      style = {
        ...style,
        height: "40px",
        fontSize: "13px",
      };
      break;
    case "xsmall":
      style = {
        ...style,
        height: "36px",
        fontSize: "13px",
      };
      break;
    default:
      break;
  }

  return (
    <Container style={style} disable={disable}>
      {children}
    </Container>
  );
};

export { ButtonPrimary };
