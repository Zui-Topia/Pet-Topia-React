import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h3`
    font-size: 20px;
    margin: 0;
    font-weight: 400;
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
    color: #000000;
    font-family: 'Inter';
`;

const MyPetoriaTitle = () => {
    return (
        <TitleWrapper>
            <SectionTitle>마이 페토리아</SectionTitle>
        </TitleWrapper>
    );
};

const MyReservationTitle = () => {
    return (
        <TitleWrapper>
            <SectionTitle>나의 예약 내역</SectionTitle>
        </TitleWrapper>
    );
};

export {MyPetoriaTitle, MyReservationTitle}
