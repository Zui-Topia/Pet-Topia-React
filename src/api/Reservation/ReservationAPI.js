import React, { useEffect, useState } from 'react';
import instance from '../Index';

const ReservationAPI = (reservationInfo) => {
    return instance.post('/reservation/create', reservationInfo);
};

export default ReservationAPI;
