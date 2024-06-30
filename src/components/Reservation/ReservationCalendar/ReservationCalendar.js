/* 달력 날짜 선택 컴포넌트 */
import React from 'react';
import { Calendar, Select, Col, Row } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import moment from 'moment';

// 작성자: 정은찬

// 달력 날짜 선택 컴포넌트
const ReservationCalendar = ({ onSelectDate }) => {
    // 패널 변경 시 호출되는 함수
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    // 날짜 선택 시 호출되는 함수
    const onSelect = (value) => {
        onSelectDate(value.format('YYYY-MM-DD')); // 선택된 날짜를 부모 컴포넌트로 전달
    };

    // 오늘 이전의 날짜를 비활성화하는 함수
    const disabledDate = (current) => {
        return current && current < moment().startOf('day');
    };

    return (
        <div style={{ width: 450, height: 360, border: '1px solid #d9d9d9', borderRadius: '2px', padding: '8px' }}>
            <GlobalStyle />
            <StyledCalendar
                fullscreen={false}
                // 캘린더 헤더 커스터마이징
                headerRender={({ value, type, onChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];
                    let current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                        current = current.month(i);
                        months.push(localeData.monthsShort(current));
                    }
                    for (let i = start; i < end; i++) {
                        monthOptions.push(
                            <Select.Option key={i} value={i} className="month-item">
                                {months[i]}
                            </Select.Option>,
                        );
                    }
                    const year = value.year(); // 현재 연도 가져오기
                    const month = value.month(); // 현재 월 가져오기
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
                                        popupMatchSelectWidth={false}
                                        className="my-year-select"
                                        value={year} // 연도 출력
                                        onChange={(newYear) => {
                                            const now = value.clone().year(newYear);
                                            onChange(now); // 연도 변경 시 호출
                                        }}
                                    >
                                        {options}
                                    </StyledSelect>
                                </Col>
                                <Col>
                                    <StyledSelect
                                        size="small"
                                        popupMatchSelectWidth={false}
                                        value={month} // 월 출력
                                        onChange={(newMonth) => {
                                            const now = value.clone().month(newMonth);
                                            onChange(now); // 월 변경 시 호출
                                        }}
                                    >
                                        {monthOptions}
                                    </StyledSelect>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
                onSelect={onSelect} // 날짜 선택 시 호출되는 함수
                onPanelChange={onPanelChange} // 패널 변경 시 호출되는 함수
                disabledDate={disabledDate} // 오늘 이전 날짜를 비활성화
            />
        </div>
    );
};

export default ReservationCalendar;

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

    .ant-picker-content thead {
        // 헤더의 폰트 설정
        font-family: 'Kanit' !important;
        font-size : 20px;
        border-bottom : 15px solid #ffffff;
    }

    .ant-picker-calendar {
        // 캘린더의 폰트 설정
        font-family: 'Kanit' !important;
        font-size : 20px;
    }

    /* 오늘 날짜 테두리 색상 커스터마이징 */
    .ant-picker-calendar .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-color: pink !important;
    }

    /* 선택된 라디오 버튼 색상 커스터마이징 */
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        border-color: pink !important;
        color: pink !important;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        border-color: pink !important;
        color: pink !important;
    }
`;

// 캘린더 스타일 정의
const StyledCalendar = styled(Calendar)`
    width: 450px;
    height: 360px;

    .ant-picker-cell-selected .ant-picker-cell-inner {
        background-color: pink !important;
    }

    :where(.css-dev-only-do-not-override-zg0ahe).ant-picker-calendar
        .ant-picker-cell-in-view.ant-picker-cell-today
        .ant-picker-cell-inner::before {
        border: 1px solid pink !important;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        border-color: pink !important;
        color: pink !important;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        border-color: pink !important;
        color: pink !important;
    }

    .ant-picker-cell:hover .ant-picker-cell-inner {
        background-color: pink !important;
    }

    /* 비활성화된 날짜의 글자색을 회색으로 설정하고 클릭 비활성화 */
    .ant-picker-cell-disabled .ant-picker-cell-inner {
        color: #d9d9d9 !important;
    }
`;

// 셀렉트 스타일 정의
const StyledSelect = styled(Select)`
    .ant-select-selector {
        border-color: #d9d9d9 !important;
        &:hover {
            border-color: pink !important;
        }
    }

    .ant-select-item-option {
        &:hover {
            color: pink !important;
        }
    }
`;
