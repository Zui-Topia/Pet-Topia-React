import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";

const CommonModal = ({
  modalTrigger,
  modalTriggerStyle,
  children,
  title,
  style,
  isActive = false,
  footer = null,
}) => {
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
        isActive={isActive}
        bodyStyle={{ height: style.height }}
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};

const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

// {modalTrigger} : 모달 띄우기 위한 trigger (버튼 혹은 component)
// {modalTriggerStyle} : 모달 띄우기 위한 trigger style (css)
// {children} : 모달 내부 내용 (modal body)
// {title} : 모달 창 제목 (modal title)
// {style} : 모달 창 width, height (modal 크기)
// {isActive} : modalTrigger 클릭 활성화/비활성화
// {footer} : modal 버튼 커스텀할 수 있음.
export default CommonModal;
