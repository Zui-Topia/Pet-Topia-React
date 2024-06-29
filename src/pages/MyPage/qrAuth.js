import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Result } from 'antd';

// QR 인증 확인하는 함수
const QrAuth = () => {
    const [status, setStatus] = useState('success'); //  <Result> 인증 기본값 'success'
    const [title, setTitle] = useState(''); // <Result>의 제목 기본값 설정
    const [subTitle, setSubTitle] = useState(''); // <Result>의 부제목 기본값 설정

    const location = useLocation();
    const { authData } = location.state || {}; // Navigate 되기 전 페이지에서 authData로 저장된 데이터 가져오기

    useEffect(() => {
        // authData가 존재할 시 인증 성공
        if (authData && authData.success) {
            setStatus('success');
            setTitle('예약 확인이 완료되었습니다.');
            setSubTitle('');
        }
        // authData가 존재하지 않을 시 인증 실패
        else {
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
