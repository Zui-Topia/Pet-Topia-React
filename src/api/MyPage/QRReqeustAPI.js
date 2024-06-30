import instance from '../Index';

// QR 생성 요청하는 API
const QRRequestAPI = (reservationId) => {
    return instance.get('/auth/create', {
        params: {
            reservationId,
        },
    });
};

// QR 인증 요청하는 API
const QRAuthCheckAPI = (qrId) => {
    return instance.get('/auth/check', {
        params: {
            qrId,
        },
    });
};

export { QRRequestAPI, QRAuthCheckAPI };
