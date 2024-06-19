import React from 'react';
import { Calendar, Select, Col, Row } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

    * {
        font-size: 17px;
        font-family: 'Kanit' !important;
    }

    /* Customize ant-design components */
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
`;

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

const ReservationCalendar = ({ onSelectDate }) => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const onSelect = (value) => {
        onSelectDate(value.format('YYYY-MM-DD')); // 선택된 날짜를 부모 컴포넌트로 전달
    };

    return (
        <div style={{ width: 450, height: 360, border: '1px solid #d9d9d9', borderRadius: '2px', padding: '8px' }}>
            <GlobalStyle />
            <StyledCalendar
                fullscreen={false}
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
                    const year = value.year();
                    const month = value.month();
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
                                        value={year}
                                        onChange={(newYear) => {
                                            const now = value.clone().year(newYear);
                                            onChange(now);
                                        }}
                                    >
                                        {options}
                                    </StyledSelect>
                                </Col>
                                <Col>
                                    <StyledSelect
                                        size="small"
                                        popupMatchSelectWidth={false}
                                        value={month}
                                        onChange={(newMonth) => {
                                            const now = value.clone().month(newMonth);
                                            onChange(now);
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
                onPanelChange={onPanelChange}
            />
        </div>
    );
};

export default ReservationCalendar;
