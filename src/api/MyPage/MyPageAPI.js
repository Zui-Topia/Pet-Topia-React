import React, { useEffect, useState } from 'react';
import instance from '../Index';

const MyReservationAPI = (userId) => {
    return instance.get('/mypage', {
        params: {
            userId,
        },
    });
};

export default MyReservationAPI;
