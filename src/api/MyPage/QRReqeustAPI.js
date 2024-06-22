import React, { useEffect, useState } from 'react';
import instance from '../Index';

const QRRequestAPI = (reservationId) => {
    return instance.get('/auth/create', {
        params: {
            reservationId,
        },
    });
};

const QRAuthCheckAPI = (qrId) => {
    return instance.get('/auth/check', {
        params: {
            qrId,
        },
    });
};

export { QRRequestAPI, QRAuthCheckAPI };
