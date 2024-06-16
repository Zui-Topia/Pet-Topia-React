import React from 'react';
import styled from 'styled-components';

const ReservationInfoBlock = styled.div`
    height: 200px;

    background: #f7f7f7;
    border-radius: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.04);

    margin-top: 20px;
    margin-bottom: 20px;
`;

const ReservationInfo = ({ children }) => {
    return <ReservationInfoBlock>{children}</ReservationInfoBlock>;
};

export default ReservationInfo;
