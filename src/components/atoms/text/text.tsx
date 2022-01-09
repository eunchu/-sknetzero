import styled from "styled-components";

// Style >>>
const H1 = styled.h1`
  font-size: 64px;
  line-height: 95px;
  font-weight: 300;
  color: #191f28; // TODO theme 컬러 연결
`;
const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: -3px;
  line-height: 100%;
  font-weight: 400;
  color: #191f28;
`;
const H3 = styled.h3`
  font-size: 40px;
  line-height: 59px;
  font-weight: 700;
  color: #191f28;
`;
const H4 = styled.h4`
  font-size: 32px;
  line-height: 47px;
  font-weight: 700;
  color: #191f28;
`;
const H5 = styled.h5`
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -1px;
  font-weight: 700;
  color: #191f28;
`;
const H6 = styled.h6`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #191f28;
`;
const SubTitle1 = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: #191f28;
`;
const SubTitle2 = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: #191f28;
`;
const Body1 = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
`;
const Body2 = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 13px;
`;
const Caption = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 23px;
`;
const Overline = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
`;
// Style <<<

// Noto Sans CJK KR

interface TextProps {
  type: string;
  children: string;
}
const Text = ({ type, children }: TextProps) => {
  return type === "h1" ? (
    <H1>{children}</H1>
  ) : type === "h2" ? (
    <H2>{children}</H2>
  ) : type === "h3" ? (
    <H3>{children}</H3>
  ) : type === "h4" ? (
    <H4>{children}</H4>
  ) : type === "h5" ? (
    <H5>{children}</H5>
  ) : type === "h6" ? (
    <H6>{children}</H6>
  ) : type === "subtitle1" ? (
    <SubTitle1>{children}</SubTitle1>
  ) : type === "subtitle2" ? (
    <SubTitle2>{children}</SubTitle2>
  ) : type === "body1" ? (
    <Body1>{children}</Body1>
  ) : type === "body2" ? (
    <Body2>{children}</Body2>
  ) : type === "caption" ? (
    <Caption>{children}</Caption>
  ) : type === "overline" ? (
    <Overline>{children}</Overline>
  ) : (
    <div>error</div>
  );
};

export default Text;
