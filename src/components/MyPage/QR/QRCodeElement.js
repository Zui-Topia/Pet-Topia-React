import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { QRAuthCheckAPI, QRRequestAPI } from '../../../api/MyPage/QRReqeustAPI';
import { QRCode, Space } from 'antd';
const value = 'https://ant.design';

// QR 아이템 생성, 만료, 재발급 로직 처리하는 함수
const QRCodeElement = ({ reservationId }) => {
    const [qrId, setQrId] = useState(null);
    const [error, setError] = useState(null);
    const [qrStatus, setQrStatus] = useState('loading'); // qr 초기 상태값 loading
    const navigate = useNavigate();

    // reservationId로 QR 생성하는 API 비동기 호출
    const fetchQR = async () => {
        try {
            const response = await QRRequestAPI(reservationId);

            if (response.data.success) {
                setQrId(response.data.data);
                setQrStatus('active');
                // console.log('qrId : ' + qrId);
            }
        } catch (error) {
            setError(error);
            console.error(error);
        }
    };

    // 다른 활성화된 예약 내역을 누를 때, fetchQR 호출
    useEffect(() => {
        fetchQR();
    }, [reservationId]);

    // QR 만료 후 재발급 받기 위해서, fetchQR 호출
    const handleRefresh = () => {
        fetchQR();
    };

    // QR 아이템 15초 만료시간 생성
    useEffect(() => {
        if (qrStatus === 'active') {
            const timer = setTimeout(() => {
                setQrStatus('expired');
            }, 15000); // 15 seconds

            return () => clearTimeout(timer);
        }
    }, [qrStatus]);

    // 인증 확인을 위한 API 비동기 호출
    // 현재는 관리자 페이지가 존재하지 않으므로, 임시로 활성화되어 있는 QR을 클릭 시 인증 확인 가능하도록 처리
    const handleQRClick = async () => {
        if (qrStatus === 'active') {
            try {
                const authResponse = await QRAuthCheckAPI(qrId);
                navigate('/auth', { state: { authData: authResponse.data } }); // authResponse.data.data 넘기기
            } catch (error) {
                console.error('QR 오류 발생:', error);
            }
        }
    };

    // QR에 삽입되는 url
    // 현재는 관리자 페이지가 존재하지 않으므로, localhost로 url 제작하였지만 추후에 변경 예정
    const url = `http://localhost:8081/auth/check?qrId=${qrId}`;

    const [text, setText] = React.useState(url);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh' }}>
            <Space direction="vertical" align="center">
                {qrStatus === 'loading' && <QRCode value="-" status="loading" />}
                {qrStatus === 'active' && (
                    <div onClick={handleQRClick}>
                        <QRCode value={url} size={250} />
                    </div>
                )}
                {qrStatus === 'expired' && (
                    <QRCode value={value} size={250} status="expired" onRefresh={handleRefresh} />
                )}
            </Space>
        </div>
    );
};
export default QRCodeElement;
