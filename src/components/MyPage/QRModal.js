import React from 'react';
import styled from 'styled-components';
import CommonModal from '../../components/Main/Common/CommonModal';
import QRModalBody from './QR/QRModalBody';
import QRModalHead from './QR/QRModalHead';

const QRBlock = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;

    .title {
        font-size: 30px;
        font-weight: 500px;
    }

    .description {
        font-size: 18px;
        padding: 1px;
        margin: 1px;
    }
`;

const QRModal = ({ children, isActive = false }) => {
    return (
        <CommonModal
            modalTrigger={children}
            modalTriggerStyle={{ textAlign: 'left' }}
            title=""
            isActive={isActive}
            style={{ width: '500px', height: '550px' }}
        >
            <QRBlock>
                <span class="title">QR코드</span>
                <p class="description">아래 QR코드는 매장 컨시어시 방문 시 사용 가능합니다.</p>
                <br />
                <QRModalHead />
                <QRModalBody />
            </QRBlock>
        </CommonModal>
    );
};

export default QRModal;
