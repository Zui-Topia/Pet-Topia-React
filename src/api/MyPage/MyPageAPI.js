import React, { useEffect, useState } from 'react';
import instance from '../Index';

const MyReservationAPI = (userId) => {
    return instance.get('/mypage', {
        params: {
            userId,
        },
    });
};

const ReservationHistoryAPI = (userId) => {
    return instance.get('/mypage/history', {
        params: {
            userId,
        },
    });
};

export { MyReservationAPI, ReservationHistoryAPI };
