import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import CommonModal from './CommonModal'; // 실제 파일 경로로 조정

const ReservationCompleteModal = ({ children, isActive }) => {
    const modalTrigger = (
        <button style={{ display: 'none' }} id="modalTriggerButton">
            {children}
        </button>
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(isActive);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <CommonModal
            modalTrigger={modalTrigger}
            modalTriggerStyle={{ textAlign: 'center' }}
            title="예약 완료"
            isActive={isActive}
            style={{ width: '600px', height: '400px' }}
        >
            {children}
        </CommonModal>
    );
};

export default ReservationCompleteModal;
