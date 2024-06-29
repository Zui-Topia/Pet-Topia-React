import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { QRAuthCheckAPI, QRRequestAPI } from '../../../api/MyPage/QRReqeustAPI';
import { QRCode, Space } from 'antd';
const value = 'https://ant.design';

// const QRCodeElement = () => (
//     <Flex gap="middle" wrap>
//         <QRCode value={value} status="loading" />
//         <QRCode value={value} status="expired" onRefresh={() => console.log('refresh')} />
//         <QRCode value={value} status="scanned" />
//     </Flex>
// );
// export default QRCodeElement;

const QRCodeElement = ({ reservationId }) => {
    const [qrId, setQrId] = useState(null);
    const [error, setError] = useState(null);
    const [qrStatus, setQrStatus] = useState('loading');
    const navigate = useNavigate();

    const fetchQR = async () => {
        try {
            const response = await QRRequestAPI(reservationId);
            console.log(response.data);
            console.log('값 :' + response.data.data);

            if (response.data.success) {
                console.log('성공 값 : ' + response.data.data);
                setQrId(response.data.data);
                setQrStatus('active');
                // console.log('qrId : ' + qrId);
            }
        } catch (error) {
            setError(error);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchQR();
    }, [reservationId]);

    useEffect(() => {
        if (qrStatus === 'active') {
            const timer = setTimeout(() => {
                setQrStatus('expired');
            }, 8000); // 30 seconds

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [qrStatus]);

    const handleRefresh = () => {
        fetchQR();
    };

    const handleQRClick = async () => {
        if (qrStatus === 'active') {
            try {
                console.log('qrId : ', qrId);
                const authResponse = await QRAuthCheckAPI(qrId);
                console.log(authResponse);
                console.log(authResponse.data.success);
                console.log(authResponse.data.data);

                navigate('/auth', { state: { authData: authResponse.data } }); // Pass authResponse.data.data in state
            } catch (error) {
                console.error('Error during QR code click handling:', error);
            }
        }
    };
    // const navigate = useNavigate();
    const url = `http://localhost:8081/auth/check?qrId=${qrId}`;

    // <QRCode value={value} status="expired" onRefresh={() => console.log('refresh')} />

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
