import React, { useState, useEffect } from 'react';
import { Menu, Modal } from 'antd';
import styled from 'styled-components';

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

const items = [
    {
        key: 'sub4',
        label: '시간을 선택해주세요',

        children: [
            {
                key: '10:00 AM',
                label: '10:00 AM',
            },
            {
                key: '11:00 AM',
                label: '11:00 AM',
            },
            {
                key: '12:00 PM',
                label: '12:00 PM',
            },
            {
                key: '01:00 PM',
                label: '01:00 PM',
            },
            {
                key: '02:00 PM',
                label: '02:00 PM',
            },
            {
                key: '03:00 PM',
                label: '03:00 PM',
            },
            {
                key: '04:00 PM',
                label: '04:00 PM',
            },
            {
                key: '05:00 PM',
                label: '05:00 PM',
            },
            {
                key: '06:00 PM',
                label: '06:00 PM',
            },
            {
                key: '07:00 PM',
                label: '07:00 PM',
            },
            {
                key: '08:00 PM',
                label: '08:00 PM',
            },
        ],
    },
];

const TimeSelection = ({ onSelectTime, selectedDate }) => {
    const [selectedOption, setSelectedOption] = useState(null); // Initial selected option
    const [openKeys, setOpenKeys] = useState([]);

    // 날짜가 변경될 때 선택된 시간 초기화
    useEffect(() => {
        setSelectedOption(null); // 선택된 시간 초기화
    }, [selectedDate]);

    const handleMenuClick = (e) => {
        setSelectedOption(e.key);
        setOpenKeys([]);
        onSelectTime(e.key); // 선택된 시간을 부모 컴포넌트로 전달
    };

    const handleOpenChange = (keys) => {
        setOpenKeys(keys);
    };

    return (
        <StyledMenu
            onClick={handleMenuClick}
            selectedKeys={selectedOption ? [selectedOption] : []}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            mode="inline"
        >
            <StyledSubMenu
                key={items[0].key}
                title={
                    <React.Fragment>
                        {selectedOption ? (
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
                            items[0].label
                        )}
                    </React.Fragment>
                }
            >
                {items[0].children.map((child) => (
                    <MenuItem key={child.key}>{child.label}</MenuItem>
                ))}
            </StyledSubMenu>
        </StyledMenu>
    );
};

export default TimeSelection;
