import React from 'react';
import styled from 'styled-components';

const SmallTitle = styled.h3`
    font-size: 20px;
    margin: 0;
    font-weight: 400;
`;
const LargeTitle = styled.h1`
    font-size: 32px;
    margin: 0;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
    color: #000000;
    font-family: 'Kanit', Helvetica;
`;

const Title = () => {
    return (
        <TitleWrapper>
            <SmallTitle>THE</SmallTitle>
            <LargeTitle>PETOPIA</LargeTitle>
        </TitleWrapper>
    );
};

export default Title;
