import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px 0; /* 위쪽으로 글자를 올리기 위해 패딩 조정 */
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", sans-serif; /* 폰트를 Kanit으로 설정 */
  height: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LargeText = styled.div`
  font-size: 18px; /* 윗줄 글씨 크기 */
  font-weight: 600; /* 굵기 조절 */
  margin-bottom: 5px; /* 두 줄 간격 조절 */
`;

const HighlightedText = styled.span`
  font-size: 25px; /* The PETOPIA의 글씨 크기 */
`;

const SmallText = styled.div`
  font-size: 14px; /* 아랫줄 글씨 크기 */
  font-weight: 400;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <LargeText>
          반려동물과 함께라서 더 행복한 순간,{" "}
          <HighlightedText>The PETOPIA</HighlightedText>
        </LargeText>
        <SmallText>
          가까운 지점 선택해서 MAP, RESERVATION 서비스를 이용해보세요.
        </SmallText>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
