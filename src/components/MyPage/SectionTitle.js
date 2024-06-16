import React from 'react';
import styled from 'styled-components';

const SectionTitleWrapper = styled.div`
    position: relative;
    display: flex;

    align-items: baseline;

    color: #000000;
    font-family: 'Inter';
    font-size: 25px;
    font-weight: 400;
`;

const SectionTitle = ({ title }) => {
    return <SectionTitleWrapper>{title}</SectionTitleWrapper>;
};

export default SectionTitle;
