import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import CommonModal from './CommonModal';

// 예약 완료 모달 컴포넌트
const ReservationCompleteModal = ({ children, isActive, borderRadius }) => {
    // 모달을 열기 위한 트리거 버튼
    const modalTrigger = (
        <button style={{ display: 'none' }} id="modalTriggerButton">
            {children}
        </button>
    );

    // 모달 열림 상태를 관리하는 상태 변수
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기 함수
    const showModal = () => {
        setIsModalOpen(isActive);
    };

    // 모달 확인(닫기) 처리 함수
    const handleOk = () => {
        setIsModalOpen(false);
    };

    // 모달 취소(닫기) 처리 함수
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <CommonModal
            modalTrigger={modalTrigger} // 모달 트리거 버튼 설정
            modalTriggerStyle={{ textAlign: 'center' }} // 모달 트리거 버튼 스타일
            title="" // 모달 제목
            isActive={isActive} // 모달 활성화 상태
            style={{ width: '499px', height: '300px', borderRadius: '20px' }} // 모달 컨테이너 스타일
            borderRadius={borderRadius} // 모달 컨테이너 테두리 반경
        >
            {children} {/* 모달 내용 (자식 요소) */}
        </CommonModal>
    );
};

export default ReservationCompleteModal;
