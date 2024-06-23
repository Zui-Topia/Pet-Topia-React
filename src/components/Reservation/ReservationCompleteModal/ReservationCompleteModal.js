import React from 'react';

import styled from 'styled-components';
import { Modal } from 'antd';

const StyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: transparent !important;
        box-shadow: none !important;
    }
`;

const ReservationCompleteModal = ({ children, isModalOpen, handleCancel }) => {
    return (
        <StyledModal open={isModalOpen} footer={null} onCancel={handleCancel}>
            {children}
        </StyledModal>
    );
};

export default ReservationCompleteModal;
