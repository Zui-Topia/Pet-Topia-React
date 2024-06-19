import React from "react";
import styled from "styled-components";
import { MAIN_IMAGES_PATHS } from "../../../constants/imagePaths";

const FooterContainer = styled.div`
  width: 100vw;
  height: 200px;
  position: absolute;

  background-size: cover; /* 이미지를 커버하도록 설정 */
  background-position: center; /* 이미지를 가운데 정렬 */

  bottom: 0;
  background-image: url(${MAIN_IMAGES_PATHS.MAIN_FOOT});
`;

// const FooterBanner = styled.div``;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;

//featuring by yk
