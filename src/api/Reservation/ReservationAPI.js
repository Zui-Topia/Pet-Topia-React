import React, { useEffect, useState } from 'react';
import instance from '../Index';

const ReservationAPI = {
    createReservation: (reservationInfo) => {
        return instance.post('/reservation/create', reservationInfo);
    },
    petStrollerCnt: (branchId, reservationDate) => {
        return instance.get(`/reservation/${branchId}?reservationDate=${reservationDate}`);
    },
};
export default ReservationAPI;
