import React from "react";
import styled from "styled-components";

const SmallTitle = styled.h3`
  // THE
  font-size: 14px;
  margin: 0;
  font-weight: 400;
`;
const LargeTitle = styled.h1`
  //PETOPIA
  font-size: 28px;
  margin: 0;
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  color: #000000;
  font-family: "Kanit";
  margin-top: ${({ marginTop }) => marginTop || "0"};
`;

const Title = ({ marginTop }) => {
  return (
    <TitleWrapper marginTop={marginTop}>
      <SmallTitle>THE</SmallTitle>
      <LargeTitle>PETOPIA</LargeTitle>
    </TitleWrapper>
  );
};

export default Title;
