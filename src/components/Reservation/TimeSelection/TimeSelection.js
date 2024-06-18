import React, { useState } from 'react';
import { Menu } from 'antd';
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
            max-height: 280px;
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

        children: [
            {
                key: 'option-1',
                label: '10 : 30 AM',
            },
            {
                key: 'option-2',
                label: '11 : 30 AM',
            },
            {
                key: 'option-3',
                label: '12 : 30 PM',
            },
            {
                key: 'option-4',
                label: '01 : 30 PM',
            },
            {
                key: 'option-5',
                label: '02 : 30 PM',
            },
            {
                key: 'option-6',
                label: '03 : 30 PM',
            },
            {
                key: 'option-7',
                label: '04 : 30 PM',
            },
            {
                key: 'option-8',
                label: '05 : 30 PM',
            },
            {
                key: 'option-9',
                label: '06 : 30 PM',
            },
            {
                key: 'option-10',
                label: '07 : 30 PM',
            },
        ],
    },
];

const TimeSelection = () => {
    const [selectedOption, setSelectedOption] = useState('option-1'); // Initial selected option

    const [openKeys, setOpenKeys] = useState([]);

    const handleMenuClick = (e) => {
        setSelectedOption(e.key);
        setOpenKeys([]);
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
                        {items[0].label}
                        {selectedOption && (
                            <span
                                style={{
                                    marginLeft: '10px',
                                    fontSize: '20px',
                                    color: '#555555',
                                }}
                            >
                                {items[0].children.find((item) => item.key === selectedOption)?.label}
                            </span>
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
