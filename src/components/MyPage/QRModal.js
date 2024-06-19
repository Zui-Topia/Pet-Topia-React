import React from 'react';
import CommonModal from '../../components/Main/Common/CommonModal';

const QRModal = ({ children, isActive = false }) => {
    return (
        <CommonModal
            modalTrigger={children}
            modalTriggerStyle={{ textAlign: 'left' }}
            title="QR코드"
            isActive={isActive}
            style={{ width: '550px', height: '750px' }}
        >
            안녕하세요!
        </CommonModal>
    );
};

export default QRModal;
