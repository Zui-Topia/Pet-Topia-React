import instance from '../Index';

// 마이페이지 전체 내용 호출하는 API
const MyReservationAPI = () => {
    return instance.get('/mypage');
};

// 마이페이지 전체 과거 예약 내역 조회하는 API
const ReservationHistoryAPI = () => {
    return instance.get('/mypage/history');
};

// 예약 취소 API
const ReservationDeleteAPI = (reservationInfo) => {
    return instance.post('/mypage/delete', reservationInfo);
};

export { MyReservationAPI, ReservationHistoryAPI, ReservationDeleteAPI };
