import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Result } from 'antd';

const QrAuth = () => {
    const [status, setStatus] = useState('success'); // Default status, can be changed dynamically
    const [title, setTitle] = useState('Authentication Success'); // Default title, can be changed dynamically
    const [subTitle, setSubTitle] = useState('Authentication Success'); // Default title, can be changed dynamically

    const location = useLocation();
    const { authData } = location.state || {};

    useEffect(() => {
        if (authData && authData.success) {
            setStatus('success');
            setTitle('예약 확인이 완료되었습니다.');
            setSubTitle('');
        } else {
            setStatus('error');
            setTitle(authData.data);
            setSubTitle('');
        }
    }, [authData]);

    return (
        <>
            <Result status={status} title={title} subTitle={subTitle} />
        </>
    );
};

export default QrAuth;
