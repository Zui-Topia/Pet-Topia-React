import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

const ModalButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

// {modalTrigger} : 모달 띄우기 위한 trigger (버튼 혹은 component)
// {modalTriggerStyle} : 모달 띄우기 위한 trigger style (css)
// {children} : 모달 내부 내용 (modal body)
// {title} : 모달 창 제목 (modal title)
// {height} : 모달 창 height (modal style)
const CommonModal = ({ modalTrigger, modalTriggerStyle, children, title, style, isActive = false }) => {
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
        <>
            <ModalButton onClick={showModal} style={modalTriggerStyle}>
                {modalTrigger}
            </ModalButton>
            <Modal
                title={title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={style.width}
                bodyStyle={{ height: style.height }}
            >
                {children}
            </Modal>
        </>
    );
};
export default CommonModal;
