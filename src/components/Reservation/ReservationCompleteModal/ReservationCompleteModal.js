/* 예약 완료 모달 */
import React from 'react';

import styled from 'styled-components';
import { Modal } from 'antd';

// 스타일 정의
const StyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: transparent !important;
        box-shadow: none !important;
    }
`;

// 예약 완료 모달
const ReservationCompleteModal = ({ children, isModalOpen, handleCancel }) => {
    return (
        <StyledModal open={isModalOpen} footer={null} onCancel={handleCancel}>
            {children}
        </StyledModal>
    );
};

export default ReservationCompleteModal;
