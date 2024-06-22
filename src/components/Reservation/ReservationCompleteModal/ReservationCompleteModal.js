import React, { useState } from 'react';

import CommonModal from './CommonModal';

const ReservationCompleteModal = ({ children, isActive, borderRadius }) => {
    // 모달을 열기 위한 트리거 버튼 (보이지 않게 설정)
    const modalTrigger = <button style={{ display: 'none' }} id="modalTriggerButton"></button>;

    return (
        <CommonModal
            modalTrigger={modalTrigger} // 모달을 열기 위한 트리거 버튼 설정
            modalTriggerStyle={{ textAlign: 'center' }} // 트리거 버튼을 화면 가운데 정렬
            title="" // 모달 제목 (공백으로 설정)
            isActive={isActive} // 모달 활성화 상태 설정
            style={{
                width: '499px', // 모달 너비
                height: '300px', // 모달 높이
                borderRadius: '20px', // 모달 테두리 반경
                position: 'absolute', // 위치 설정을 위해 절대 위치 설정
                top: '50%', // 화면 세로 중앙 정렬을 위한 top 값
                left: '50%', // 화면 가로 중앙 정렬을 위한 left 값
            }}
            borderRadius={borderRadius} // 모달 컨테이너 테두리 반경 설정
        >
            {children} {/* 모달 내용 (자식 요소) */}
        </CommonModal>
    );
};

export default ReservationCompleteModal;
