import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

// 모달 버튼 스타일 정의
const ModalButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

// 모달 창 스타일 정의
const StyledModal = styled(Modal)`
    .ant-modal-content {
        border-radius: ${(props) => props.borderRadius || '8px'}; // 기본적으로 8px radius 적용
    }
`;

// {modalTrigger} : 모달 띄우기 위한 trigger (버튼 혹은 component)
// {modalTriggerStyle} : 모달 띄우기 위한 trigger style (css)
// {children} : 모달 내부 내용 (modal body)
// {title} : 모달 창 제목 (modal title)
// {style} : 모달 창 스타일 (width, height 등)
// {isActive} : 모달 창 초기 상태 (default: false)
// {borderRadius} : 모달 창 border radius (default: 8px)
const CommonModal = ({ modalTrigger, modalTriggerStyle, children, title, style, isActive = false, borderRadius }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 창 열기 함수
    const showModal = () => {
        setIsModalOpen(isActive);
    };

    // 모달 창 확인 버튼 클릭 함수
    const handleOk = () => {
        setIsModalOpen(false);
    };

    // 모달 창 취소 버튼 클릭 함수
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ModalButton onClick={showModal} style={modalTriggerStyle}>
                {modalTrigger}
            </ModalButton>
            <StyledModal
                title={title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={style.width}
                bodyStyle={{ height: style.height }}
                footer={null}
                borderRadius={borderRadius}
            >
                {children}
            </StyledModal>
        </>
    );
};

export default CommonModal;
