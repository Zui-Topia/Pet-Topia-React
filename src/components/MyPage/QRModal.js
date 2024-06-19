import React from 'react';
import CommonModal from '../../components/Main/Common/CommonModal';

const QRModal = ({ children }) => {
    return (
        <CommonModal
            modalTrigger={children}
            modalTriggerStyle={{ textAlign: 'left' }}
            title="QR코드"
            style={{ width: '550px', height: '750px' }}
        >
            안녕하세요!
        </CommonModal>
    );
};

export default QRModal;
