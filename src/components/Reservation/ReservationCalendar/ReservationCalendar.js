import React from 'react';
import { Calendar, Select, Col, Row, Typography } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

// Kanit 폰트를 불러오는 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

    * {
        font-size: 17px;
        font-family: 'Kanit' !important; // 모든 요소에 Kanit 폰트 적용
        --ant-primary-color: pink !important;
        --ant-primary-color-hover: pink !important;
        --ant-primary-color-active: pink !important;
        --ant-primary-color-outline: rgba(255, 192, 203, 0.2) !important;
        --ant-primary-1: #fff1f0 !important; // lightest pink shade for ant design
        --ant-primary-2: #fff1f0 !important;
        --ant-primary-3: #fff1f0 !important;
        --ant-primary-4: #fff1f0 !important;
        --ant-primary-5: #ffccc7 !important; // light pink shade for ant design
        --ant-primary-6: pink !important; // pink
        --ant-primary-7: pink !important;
        --ant-primary-8: pink !important;
        --ant-primary-9: pink !important;
        --ant-primary-10: pink !important;
    }

    .ant-picker-calendar .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-color: pink !important;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        border-color: pink !important;
        color: pink !important;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        border-color: pink !important;
        color: pink !important;
    }
`;

const StyledCalendar = styled(Calendar)`
    width: 450px; /* 너비 설정 */
    height: 360px; /* 높이 설정 */

    .ant-picker-cell-selected .ant-picker-cell-inner {
        background-color: pink !important; // 선택된 날짜의 배경색을 분홍색으로 설정
    }

    :where(.css-dev-only-do-not-override-zg0ahe).ant-picker-calendar
        .ant-picker-cell-in-view.ant-picker-cell-today
        .ant-picker-cell-inner::before {
        border: 1px solid pink !important; // 오늘 날짜 셀의 테두리 색상을 분홍색으로 설정
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        border-color: pink !important; // 선택된 라디오 버튼의 테두리 색상을 분홍색으로 설정
        color: pink !important; // 선택된 라디오 버튼의 텍스트 색상을 분홍색으로 설정
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        border-color: pink !important; // 선택된 라디오 버튼의 hover 상태에서 테두리 색상을 분홍색으로 설정
        color: pink !important; // 선택된 라디오 버튼의 hover 상태에서 텍스트 색상을 분홍색으로 설정
    }

    .ant-picker-cell:hover .ant-picker-cell-inner {
        background-color: pink !important; // 셀 호버 시 배경색을 분홍색으로 설정
    }
`;

const StyledSelect = styled(Select)`
    .ant-select-selector {
        border-color: #d9d9d9 !important; // 기본 테두리 색상
        &:hover {
            border-color: pink !important; // 호버 시 테두리 색상을 분홍색으로 설정
        }
    }

    .ant-select-item-option {
        &:hover {
            color: pink !important; // 옵션 항목 호버 시 텍스트 색상을 분홍색으로 설정
        }
    }
`;

const ReservationCalendar = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode); // 패널이 변경될 때 호출되는 함수
    };

    return (
        <div style={{ width: 450, height: 360, border: '1px solid #d9d9d9', borderRadius: '2px', padding: '8px' }}>
            <GlobalStyle />
            <StyledCalendar
                fullscreen={false} // 달력을 전체 화면으로 표시하지 않음
                headerRender={({ value, type, onChange, onTypeChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];
                    let current = value.clone(); // 현재 선택된 날짜를 복제
                    const localeData = value.localeData(); // 로케일 데이터 가져오기
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                        current = current.month(i); // 월을 설정
                        months.push(localeData.monthsShort(current)); // 각 월의 짧은 이름을 배열에 추가
                    }
                    for (let i = start; i < end; i++) {
                        monthOptions.push(
                            <Select.Option key={i} value={i} className="month-item">
                                {months[i]}
                            </Select.Option>,
                        );
                    }
                    const year = value.year(); // 현재 선택된 연도 가져오기
                    const month = value.month(); // 현재 선택된 월 가져오기
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                        options.push(
                            <Select.Option key={i} value={i} className="year-item">
                                {i}
                            </Select.Option>,
                        );
                    }
                    return (
                        <div style={{ padding: '8px' }}>
                            <Row gutter={8}>
                                <Col>
                                    <StyledSelect
                                        size="small"
                                        popupMatchSelectWidth={false} // 드롭다운의 너비가 선택 상자와 맞지 않도록 설정
                                        className="my-year-select"
                                        value={year}
                                        onChange={(newYear) => {
                                            const now = value.clone().year(newYear); // 새로운 연도로 날짜 변경
                                            onChange(now); // 변경된 날짜로 설정
                                        }}
                                    >
                                        {options} {/* 연도 옵션 */}
                                    </StyledSelect>
                                </Col>
                                <Col>
                                    <StyledSelect
                                        size="small"
                                        popupMatchSelectWidth={false} // 드롭다운의 너비가 선택 상자와 맞지 않도록 설정
                                        value={month}
                                        onChange={(newMonth) => {
                                            const now = value.clone().month(newMonth); // 새로운 월로 날짜 변경
                                            onChange(now); // 변경된 날짜로 설정
                                        }}
                                    >
                                        {monthOptions} {/* 월 옵션 */}
                                    </StyledSelect>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
                onPanelChange={onPanelChange} // 패널이 변경될 때 호출되는 함수
            />
        </div>
    );
};

export default ReservationCalendar;
