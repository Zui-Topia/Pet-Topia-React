import React from "react";
import styled from "styled-components";
import { MAIN_IMAGES_PATHS } from "../../../constants/imagePaths";

const FooterContainer = styled.div`
  width: 100vw;
  height: 200px;
  position: absolute;
  bottom: 0;
  background-image: url(${MAIN_IMAGES_PATHS.MAIN_FOOT});
`;

// const FooterBanner = styled.div``;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;

//featuring by yk
