import { useMemo } from "react";
import styled, { css } from "styled-components";

import { mediaQueries } from "assets/styles/media";
import { Desktop, Mobile } from "utils";

import ImgLogo from "assets/imgs/logo-white.svg";
import IconCart from "assets/imgs/ic-cart.svg";
import IconMenu from "assets/imgs/ic-m-menu.svg";

// Style >>>
const CommonStyle = css`
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.color.white};
`;
const Container = styled.header`
  position: absolute;

  width: 100%;
  height: 80px;

  ${CommonStyle};
  .inner {
    height: inherit;
    max-width: 1440px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 32px;
    margin: auto;
    ${mediaQueries("mobile")`
      padding: 0 16px;
    `}
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }
`;
const Nav = styled.li`
  height: 40px;

  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: 400;
  line-height: 16px;

  margin-right: 40px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  .ic-cart {
    cursor: pointer;
  }
  .ic-menu {
    margin-left: 24px;
    cursor: pointer;
  }
`;
const LoginButton = styled.div`
  width: 59px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 12px;
  line-height: 12px;

  border: 1.5px solid #ffffff;
  border-radius: 16px;

  margin-left: 24px;
  cursor: pointer;
`;
// Style <<<

const Header = () => {
  const menus = useMemo(
    () => ["Home", "Market place", "Activety", "Community", "Mall"],
    []
  );

  return (
    <Container>
      <div className="inner">
        <Logo>
          <img src={ImgLogo} alt="" />
        </Logo>
        <Desktop>
          <Navigation>
            <ul>
              {menus.map((menu) => (
                <Nav key={menu}>{menu}</Nav>
              ))}
            </ul>
          </Navigation>
        </Desktop>
        <Icons>
          <img className="ic-cart" src={IconCart} alt="" />
          <Desktop>
            <LoginButton>Login</LoginButton>
          </Desktop>
          <Mobile>
            <img className="ic-menu" src={IconMenu} alt="" />
          </Mobile>
        </Icons>
      </div>
    </Container>
  );
};

export default Header;
