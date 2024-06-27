import React, { useEffect, useState } from 'react';
import instance from '../Index';

// 작성자: 정은찬

const ReservationAPI = {
    // 예약정보 보내기
    createReservation: (reservationInfo) => {
        return instance.post('/reservation/create', reservationInfo);
    },
    // 개모차 잔여개수
    petStrollerCnt: (branchId, reservationDate) => {
        return instance.get(`/reservation/${branchId}?reservationDate=${reservationDate}`);
    },
};
export default ReservationAPI;
