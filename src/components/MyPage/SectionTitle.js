import React from 'react';
import styled from 'styled-components';

// 마이페이지 공통 제목
const SectionTitle = ({ title }) => {
    return <SectionTitleWrapper>{title}</SectionTitleWrapper>;
};

export default SectionTitle;

// 마이페이지 공통 제목 css
const SectionTitleWrapper = styled.div`
    position: relative;
    display: flex;

    align-items: baseline;

    color: #000000;
    font-family: 'Kanit';
    font-size: 30px;
    font-weight: 400;
`;
