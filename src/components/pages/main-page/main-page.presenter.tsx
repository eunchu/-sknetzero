import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

import { mediaQueries } from "assets/styles/media";
import { Desktop, Mobile } from "utils";

import ImgBg from "assets/imgs/img-main.png";
// Info
import ImgInfoPhone from "assets/imgs/img-info-phone.png";
import ImgInfoLogo01 from "assets/imgs/img-info-logo-01.png";
import ImgInfoLogo02 from "assets/imgs/img-info-logo-02.png";
import ImgInfoLogo03 from "assets/imgs/img-info-logo-03.png";
import ImgInfoLogo04 from "assets/imgs/img-info-logo-04.png";
// Protect
import ImgFundNature from "assets/imgs/img-fundNature.png";
import ImgEarnMoney from "assets/imgs/img-earnMoney.png";
import ImgContribute from "assets/imgs/img-contribute.png";
// Mission
import ImgMission from "assets/imgs/img-mission.png";
// Kids
import ImgKids from "assets/imgs/img-kids.png";
// Buy&Sell
import ImgBuyAndSell from "assets/imgs/img-buyandsell.png";
// Tech
import ImgTech from "assets/imgs/img-tech.png";
// Company
import ImgCompany from "assets/imgs/img-company.png";

// Style >>>
const CommonStyle = css`
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.color.white};
`;
const MainColor = css`
  color: #4ab399;
`;
const MainBGColor = css`
  background-color: #4ab399;
`;
const TextH2 = css`
  font-weight: 900;
  font-size: 95px;
  line-height: 114px;
`;
const Container = styled.div`
  width: 100%;
  ${CommonStyle};
`;
const Visual = styled.section`
  padding-top: 240px;
  padding-bottom: 487px;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${mediaQueries("mobile")`
      padding: 0 16px;
    `}
  }
`;
const Title = styled.h2`
  font-weight: 900;
  font-size: 95px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};

  margin-bottom: 56px;
  @media (max-width: 900px) {
    font-size: 84px;
  }
  ${mediaQueries("tablet")`
    font-size: 60px;
  `}
  .sub-title {
    font-size: 40px;
    line-height: 49px;
    font-weight: 700;

    margin-bottom: 8px;
    ${mediaQueries("tablet")`
      font-size: 35px;
    `}
  }
`;
// Info
const Info = styled.section`
  background-color: #141414;

  display: flex;
  align-items: cente;
  justify-content: center;

  padding: 0 32px 160px 32px;
  ${mediaQueries("tablet")`
    padding: 0 0 160px 0;
  `}
  .inner {
    width: 955px;

    display: flex;
    flex-direction: column;

    ${mediaQueries("desktopS")`
      width: 100%;
    `}
    .layout-top {
      display: flex;
      align-items: cente;
      justify-content: space-between;

      ${mediaQueries("tablet")`
        flex-direction: column;
      `}
    }
  }
`;
const InfoTextArea = styled.p`
  width: 355px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-weight: 700;
  font-size: 22px;
  line-height: 27px;

  margin-right: 80px;
  ${mediaQueries("tablet")`
    width: 100%;
    padding: 0 16%;
  `}
  ${mediaQueries("mobile")`
    padding: 0 32px;
  `}
  .info-desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    padding-top: 16px;
  }
`;
const PhoneImgArea = styled.div`
  width: 0;
  flex-grow: 1;

  ${mediaQueries("tablet")`
    width: 100%;
    
    padding: 0 16%;
    margin-top: 40px;
  `}
  ${mediaQueries("mobile")`
    padding: 0 8%;
    margin-top: -40px;
  `}
  img {
    width: 100%;
  }
`;
const LogoList = styled.ul`
  display: flex;
  align-items: center;

  margin-top: 40px;
  ${mediaQueries("desktopS")`
    justify-content: space-between;
  `}
  ${mediaQueries("tablet")`
    padding: 0 15%;
  `}
  ${mediaQueries("mobile")`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 32px;
  `}
  li {
    margin-right: 140px;
    ${mediaQueries("desktopS")`
      margin-right: 24px;
    `}
    ${mediaQueries("mobile")`
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-right: 0;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    `}
    img {
      width: 100%;
    }
    .logo1 {
      max-width: 86px;
      ${mediaQueries("mobile")`
        margin-right: 40px;
      `}
    }
    .logo2 {
      max-width: 100px;
    }
    .logo3 {
      max-width: 105px;
      ${mediaQueries("mobile")`
        margin-right: 40px;
      `}
    }
    .logo4 {
      max-width: 120px;
    }
    &:nth-child(4) {
      margin-right: 0;
    }
  }
`;
// Protect
const Protect = styled.section`
  background-color: ${({ theme }) => theme.color.white};

  padding: 96px 0 120px 0;

  .inner {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ProtectTitle = styled.h2`
  ${MainColor};
  font-weight: 700;
  font-size: 80px;
  line-height: 98px;
  text-align: center;
  ${mediaQueries("tablet")`
    font-size: 60px;
    line-height: 61px;
  `}
  ${mediaQueries("mobile")`
    font-size: 50px;
    line-height: 61px;
  `}
  span {
    display: block;

    font-size: 37px;
    line-height: 45px;
    color: ${({ theme }) => theme.color.gray_900};

    margin-bottom: 8px;
  }
`;
const ProtectList = styled.ul`
  display: flex;
  align-items: center;

  margin-top: 40px;
  ${mediaQueries("desktopS")`
    padding: 0 32px;
  `}
  ${mediaQueries("tablet")`
    flex-direction: column;
    margin-top: 80px;
  `}
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.color.gray_900};

    margin-right: 80px;
    ${mediaQueries("tablet")`
      width: 33.3%;

      margin-right: 0;
      margin-bottom: 80px;
      &:last-child {
        margin-bottom: 0;
      }
    `}
    ${mediaQueries("tablet")`
      width: 100%;
    `}
    &:last-child {
      margin-right: 0;
    }
    img {
      max-width: 300px;
      ${mediaQueries("desktopS")`
        max-width: 100%;
      `}
      ${mediaQueries("tablet")`
        max-width: 300px;
      `}
    }
    .title {
      font-size: 21px;
      line-height: 26px;
      font-weight: 700;

      margin: 24px 0;
    }
    .desc {
      font-size: 15px;
      line-height: 18px;
      font-weight: 400;

      margin-bottom: 24px;
    }
    .link {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      ${MainColor};

      cursor: pointer;
    }
  }
`;
// Mission
const Mission = styled.section`
  display: none;
  .inner {
    padding: 120px 0 431px 12.5%; //240px
    ${mediaQueries("mobile")`
      padding-left: 32px;
    `}
    h2 {
      ${TextH2};
      color: ${({ theme }) => theme.color.white};
      strong {
        ${MainColor};
      }
    }
    .desc {
      width: 708px;
      font-weight: 700;
      font-size: 37px;
      line-height: 45px;

      margin: 24px 0;
      ${mediaQueries("mobile")`
        width: 100%;
      `}
    }
    /* TODO 배경 투명하게 변경 */
    .btn-more {
      width: 358px;
      height: 52px;

      display: flex;
      align-items: center;
      justify-content: center;

      ${MainColor};
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      border: 2px solid transparent;
      border-radius: 50px;

      background-image: linear-gradient(#141414, #141414),
        linear-gradient(to right, #28d17e 1.08%, #00b99a 100%);
      background-origin: border-box;
      background-clip: content-box, border-box;

      cursor: pointer;
    }
  }
`;
// Kids
const Kids = styled.section`
  display: none;
  background-color: #141414;

  .inner {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: -5.2%;
  }
`;
const KidsImgArea = styled.div`
  max-width: 800px;
  margin-right: 24px;
  img {
    width: 100%;
  }
`;
const KidsTextArea = styled.div`
  h2 {
    ${TextH2};
    margin-bottom: 8px;
  }
  p {
    width: 398px;
  }
  .paragraph1 {
    margin: 24px 0;
  }
  .paragraph2 {
    margin-bottom: 24px;
  }
`;
// Buy&Sell
const BuyAndSell = styled.section`
  display: none;
  background-color: #141414;

  .inner {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 8%;
  }
`;
const BuyAndSellTextArea = styled(KidsTextArea)`
  p {
    width: 555px;
  }
  .paragraph3 {
    margin-bottom: 56px;
  }
`;
const BuyAndSellImgArea = styled(KidsImgArea)`
  margin-right: 0;
  margin-left: 24px;
`;
// Tech
const Tech = styled.section`
  display: none;
  background-color: #141414;

  .inner {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: -6%;
  }
`;
const TechImgArea = styled(KidsImgArea)``;
const TechTextArea = styled(KidsTextArea)`
  .paragraph2 {
    margin-bottom: 56px;
  }
`;
// Company
const Company = styled.section`
  display: none;
  background-color: ${({ theme }) => theme.color.white};

  .inner {
    padding: 120px 0 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      text-align: center;
      ${TextH2};
      color: ${({ theme }) => theme.color.gray_900};

      margin-bottom: 120px;
      strong {
        ${MainColor};
      }
    }
    img {
      width: 100%;
    }
  }
`;

//
interface ButtonGradientProps {
  width: string;
}
const ButtonGradient = styled.div<ButtonGradientProps>`
  width: ${(props) => props.width};

  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};

  background: linear-gradient(90deg, #28d17e 1.08%, #00b99a 100%);
  border-radius: 50px;

  padding: 16px 40px;
`;
const TitleUnderLine = styled.span`
  width: 100px;
  height: 8px;

  ${MainBGColor};
`;
// Style <<<

const MainPage = () => {
  // 모바일 사이즈
  const MobileSize = useMediaQuery({ query: "(max-width: 479px)" });

  return (
    <Container>
      {/* Visual */}
      <Visual style={{ background: `url(${ImgBg}) center/cover no-repeat` }}>
        <div className="inner">
          <Title>
            <p className="sub-title">Make a positive climate impact</p>
            NATURE-BACKED
            <br />
            FINANCE
          </Title>
          <ButtonGradient width={MobileSize ? "100%" : "355px"}>
            Join the waitlist for Merit Tokens
          </ButtonGradient>
        </div>
      </Visual>
      {/* Info */}
      <Info>
        <div className="inner">
          <div className="layout-top">
            <InfoTextArea>
              A MARKETPLACE THAT PROTECTS NATURE
              <Mobile>
                <br />
              </Mobile>
              BY MAKING CARBON REMOVAL AND
              <Mobile>
                <br />
              </Mobile>
              BIODIVERSITY TRADABLE.
              <span className="info-desc">
                Landowners earn money through nature conservation. Individuals
                and businesses can trade or contribute towards nature-backed
                digital assets.
              </span>
            </InfoTextArea>
            <PhoneImgArea>
              <img src={ImgInfoPhone} alt="" />
            </PhoneImgArea>
          </div>
          {!MobileSize ? (
            <LogoList>
              <li>
                <img className="logo1" src={ImgInfoLogo01} alt="" />
              </li>
              <li>
                <img className="logo2" src={ImgInfoLogo02} alt="" />
              </li>
              <li>
                <img className="logo3" src={ImgInfoLogo03} alt="" />
              </li>
              <li>
                <img className="logo4" src={ImgInfoLogo04} alt="" />
              </li>
            </LogoList>
          ) : (
            <LogoList>
              <li>
                <img className="logo1" src={ImgInfoLogo01} alt="" />
                <img className="logo2" src={ImgInfoLogo02} alt="" />
              </li>
              <li>
                <img className="logo3" src={ImgInfoLogo03} alt="" />
                <img className="logo4" src={ImgInfoLogo04} alt="" />
              </li>
            </LogoList>
          )}
        </div>
      </Info>
      {/* Protect */}
      <Protect>
        <div className="inner">
          <ProtectTitle>
            <span>We use finance to</span>
            PROTECT{MobileSize && <br />} NATURE
          </ProtectTitle>
          <ProtectList>
            <li>
              <img src={ImgFundNature} alt="" />
              <p className="title">FUND NATURE</p>
              <p className="desc">
                Individuals fund nature protection with Merit
                <br /> tokens. Use them for trading, payments, and
                <br /> contribution to achieving environmental goals.
              </p>
              <div className="link">Join the waiting list</div>
            </li>
            <li>
              <img src={ImgEarnMoney} alt="" />
              <p className="title">Earn money</p>
              <p className="desc">
                Landowners receive money for protecting
                <br /> and increasing the carbon capture and
                <br /> biodiversity of their land.
              </p>
              <div className="link">Join the waiting list</div>
            </li>
            <li>
              <img src={ImgContribute} alt="" />
              <p className="title">contribute</p>
              <p className="desc">
                Businesses contribute towards their
                <br /> environmental and climate goals and finance
                <br /> landowners' protection efforts.
              </p>
              <div className="link">Join the waiting list</div>
            </li>
          </ProtectList>
        </div>
      </Protect>
      {/* Mission */}
      <Mission
        style={{ background: `url(${ImgMission}) center/cover no-repeat` }}
      >
        <div className="inner">
          <h2 className="title">
            OUR <strong>MISSION?</strong>
          </h2>
          <p className="desc">
            Use science, finance, and education to empower people to become
            custodians of the natural world.
          </p>
          <div className="btn-more">Watch our TEDx Talk to learn more</div>
        </div>
      </Mission>
      {/* Kids */}
      <Kids>
        <div className="inner">
          <KidsImgArea>
            <img src={ImgKids} alt="" />
          </KidsImgArea>
          <KidsTextArea>
            <h2>KIDS</h2>
            <TitleUnderLine />
            <p className="paragraph1">
              Our team of ecologists and data scientists use satellite data, big
              data analysis, machine learning, and boots-on-the-ground data to
              build global models that describe the state of nature in real
              time.
            </p>
            <p className="paragraph2">
              We’re building a digital twin of the world’s nature that reflects
              the carbon removal capacity and ecological value of a particular
              land plot.
            </p>
            <p>
              The source data supporting the process is timestamped and publicly
              available.
            </p>
          </KidsTextArea>
        </div>
      </Kids>
      {/* Buy&Sell */}
      <BuyAndSell>
        <div className="inner">
          <BuyAndSellTextArea>
            <h2>BUY&SELL</h2>
            <TitleUnderLine />
            <p className="paragraph1">
              The digital twin models issue tradable assets – tokens – for every
              100 kg of CO2 captured in biodiverse nature from partnering
              landowners’ properties.
            </p>
            <p className="paragraph2">
              Every token is 100% nature-backed funding nature preservation.
            </p>
            <p className="paragraph3">
              Tokens can be used to pay for goods and services, trading, and
              contributing towards footprint mitigation.
            </p>
            <ButtonGradient width="214px">Join the waitlist</ButtonGradient>
          </BuyAndSellTextArea>
          <BuyAndSellImgArea>
            <img src={ImgBuyAndSell} alt="" />
          </BuyAndSellImgArea>
        </div>
      </BuyAndSell>
      {/* Tech */}
      <Tech>
        <div className="inner">
          <TechImgArea>
            <img src={ImgTech} alt="" />
          </TechImgArea>
          <TechTextArea>
            <h2>TECH</h2>
            <TitleUnderLine />
            <p className="paragraph1">
              Learn about climate change and climate finance from our learning
              center.
            </p>
            <p className="paragraph2">
              Storing carbon in biodiverse nature means keeping it out of the
              atmosphere. This gives everyone an opportunity to make an impact
              in halting climate change.
            </p>
            <ButtonGradient width="176px">Learn more</ButtonGradient>
          </TechTextArea>
        </div>
      </Tech>
      {/* Company */}
      <Company>
        <div className="inner">
          <h2>
            YOU’RE IN{" "}
            <strong>
              GOOD
              <br />
              COMPANY!
            </strong>
          </h2>
          <div
            style={{ width: "702px", height: "375px", border: "1px solid red" }}
          >
            slider area
          </div>
          <img src={ImgCompany} alt="" />
        </div>
      </Company>
    </Container>
  );
};

export default MainPage;
