/* 메인페이지 하단 컴포넌트 */
import React from 'react';
import styled from 'styled-components';

// 푸터 컨테이너 스타일
const FooterContainer = styled.footer`
    width: 100%; // 너비 100%
    text-align: center; // 텍스트 가운데 정렬
    padding: 10px 0; // 위쪽 패딩을 줄여서 글자를 올리기 위해 패딩 조정
    position: fixed; // 화면에 고정
    bottom: 0; // 화면 하단에 위치
    background: white; // 배경색 흰색
    display: flex; // Flexbox 사용
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
    font-family: 'Kanit', sans-serif; // 폰트를 Kanit으로 설정
    height: 100px; // 높이 100px
`;

// 텍스트 컨테이너 스타일
const TextContainer = styled.div`
    display: flex; // Flexbox 사용
    flex-direction: column; // 세로 방향 정렬
    align-items: center; // 가로 중앙 정렬
    justify-content: center; // 세로 중앙 정렬
`;

// 큰 텍스트 스타일
const LargeText = styled.div`
    font-size: 18px; // 윗줄 글씨 크기
    font-weight: 600; // 글씨 굵기 조절
    margin-bottom: 5px; // 두 줄 간격 조절
`;

// 강조된 텍스트 스타일
const HighlightedText = styled.span`
    font-size: 25px; // 'The PETOPIA'의 글씨 크기
`;

// 작은 텍스트 스타일
const SmallText = styled.div`
    font-size: 14px; // 아랫줄 글씨 크기
    font-weight: 400; // 글씨 굵기 조절
`;

// 푸터 컴포넌트 정의
const Footer = () => {
    return (
        <FooterContainer>
            <TextContainer>
                <LargeText>
                    반려동물과 함께라서 더 행복한 순간, <HighlightedText>The PETOPIA</HighlightedText>
                </LargeText>
                <SmallText>가까운 지점 선택해서 MAP, RESERVATION 서비스를 이용해보세요.</SmallText>
            </TextContainer>
        </FooterContainer>
    );
};

export default Footer;
