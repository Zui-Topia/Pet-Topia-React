/* 시간 선택 컴포넌트 */
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

// 작성자: 정은찬

// 스타일 정의
const StyledMenu = styled(Menu)`
    height: 66px;
    width: 402px;
    font-size: 20px;
    height: auto;
    overflow-y: auto;
    text-align: center;
    border: 1px solid #d9d9d9;
`;

const MenuItem = styled(Menu.Item)`
    && {
        font-family: 'Kanit', sans-serif;
        font-size: 20px;
        color: #9b9b9b;
        text-align: center;
    }
`;

const StyledSubMenu = styled(Menu.SubMenu)`
    && {
        .ant-menu-submenu-title {
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 20px;
            text-align: center;
        }

        .ant-menu {
            max-height: 180px;
            overflow-y: auto;
            font-size: 20px;
            text-align: center;
            margin-left: -15px;
        }
    }
`;

// 메뉴 아이템 정의
const items = [
    {
        key: 'sub4',
        label: '시간을 선택해주세요',
        children: [
            { key: '10:00 AM', label: '10:00 AM' },
            { key: '11:00 AM', label: '11:00 AM' },
            { key: '12:00 PM', label: '12:00 PM' },
            { key: '01:00 PM', label: '01:00 PM' },
            { key: '02:00 PM', label: '02:00 PM' },
            { key: '03:00 PM', label: '03:00 PM' },
            { key: '04:00 PM', label: '04:00 PM' },
            { key: '05:00 PM', label: '05:00 PM' },
            { key: '06:00 PM', label: '06:00 PM' },
            { key: '07:00 PM', label: '07:00 PM' },
            { key: '08:00 PM', label: '08:00 PM' },
        ],
    },
];

// 시간 선택 컴포넌트
const TimeSelection = ({ onSelectTime, selectedDate }) => {
    const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션 상태
    const [openKeys, setOpenKeys] = useState([]); // 열려있는 서브메뉴 상태

    // 날짜가 변경될 때 선택된 시간을 초기화하는 효과
    useEffect(() => {
        setSelectedOption(null); // 선택된 시간 초기화
    }, [selectedDate]);

    // 메뉴 아이템 클릭 시 호출되는 함수
    const handleMenuClick = (e) => {
        setSelectedOption(e.key); // 선택된 옵션 업데이트
        setOpenKeys([]); // 서브메뉴 닫기
        onSelectTime(e.key); // 선택된 시간을 부모 컴포넌트로 전달
    };

    // 서브메뉴 열기/닫기 변경 시 호출되는 함수
    const handleOpenChange = (keys) => {
        setOpenKeys(keys); // 열려있는 서브메뉴 상태 업데이트
    };

    return (
        <StyledMenu
            onClick={handleMenuClick} // 메뉴 아이템 클릭 시 호출되는 함수
            selectedKeys={selectedOption ? [selectedOption] : []} // 선택된 메뉴 아이템 표시
            openKeys={openKeys} // 열려있는 서브메뉴 상태
            onOpenChange={handleOpenChange} // 서브메뉴 열기/닫기 변경 시 호출되는 함수
            mode="inline" // 메뉴 모드 설정 (가로, 세로 등)
        >
            <StyledSubMenu
                key={items[0].key} // 서브메뉴 키 설정
                title={
                    <React.Fragment>
                        {selectedOption ? (
                            // 선택된 옵션이 있는 경우
                            <span
                                style={{
                                    marginLeft: '10px',
                                    fontSize: '20px',
                                    color: '#555555',
                                }}
                            >
                                {items[0].children.find((item) => item.key === selectedOption)?.label}
                            </span>
                        ) : (
                            // 선택된 옵션이 없는 경우 기본 라벨 표시
                            items[0].label
                        )}
                    </React.Fragment>
                }
            >
                {items[0].children.map((child) => (
                    <MenuItem key={child.key}>{child.label}</MenuItem> // 각 서브메뉴 아이템을 렌더링
                ))}
            </StyledSubMenu>
        </StyledMenu>
    );
};

export default TimeSelection;
