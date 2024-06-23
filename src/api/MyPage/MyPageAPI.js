import React, { useEffect, useState } from 'react';
import instance from '../Index';

const MyReservationAPI = () => {
    return instance.get('/mypage');
};

const ReservationHistoryAPI = () => {
    return instance.get('/mypage/history');
};

// const MyReservationAPI = (userId) => {
//     return instance.get('/mypage', {
//         params: {
//             userId,
//         },
//     });
// };

// const ReservationHistoryAPI = (userId) => {
//     return instance.get('/mypage/history', {
//         params: {
//             userId,
//         },
//     });
// };

const ReservationDeleteAPI = (reservationInfo) => {
    return instance.post('/mypage/delete', reservationInfo);
};

export { MyReservationAPI, ReservationHistoryAPI, ReservationDeleteAPI };
