import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// import "assets/styles/swiper.css";
// import "antd/dist/antd.css";

const GlobalStyles = createGlobalStyle`
  ${reset};

  /* Reset style */
  * {
    box-sizing: border-box !important;
  }
  html, body, #root {
    width: 100%;
    height: 100%;

    font-family: 'Noto Sans KR', 'Montserrat', sans-serif;

    margin: 0;
    padding: 0;
  } 
  span {
    display: inline-block;
  }
  a {
  display: block;

  color: inherit;
  text-decoration: inherit;
  }
  img {
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  address,
  em,
  i {
    font-style: normal;
  }
  /* PlaceHolder */
  ::-webkit-input-placeholder {
  }
  ::-moz-placeholder {
  }
  :-ms-input-placeholder {
  }
  :-moz-placeholder {
  }
`;

export default GlobalStyles;
