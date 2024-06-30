import React from 'react';
import styled from 'styled-components';

// 마이페이지 최상위 틀
const MyPageSection = ({ children }) => {
    return <MyPageSectionBlock>{children}</MyPageSectionBlock>;
};

export default MyPageSection;

// 마이페이지 최상위 틀 css
const MyPageSectionBlock = styled.div`
    width: 800px;

    background: #ffffff;
    position: relative;

    margin: 0 auto; /*페이지 중앙에 나타나토록 설정*/

    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
`;
