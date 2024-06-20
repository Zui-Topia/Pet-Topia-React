import React, { useState } from "react";
import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  width: 550px;
  height: auto;
  overflow-y: auto;
  border: 1px solid #d9d9d9; /* 테두리 색상 설정 */
`;

const MenuItem = styled(Menu.Item)`
  && {
    font-family: "Kanit", sans-serif;
    font-size: 20px;
    color: #9b9b9b;
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
    }

    .ant-menu {
      max-height: 280px;
      overflow-y: auto;
    }
  }
`;

const items = [
  {
    key: "sub4",
    label: "몸무게",
    children: Array.from({ length: 20 }, (_, index) => {
      const kg = index + 1;
      return {
        key: `option-${kg}`,
        label: `${kg} kg`,
      };
    }),
  },
];

const PetWeightSelectionToggle = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null); // No default selection
  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuClick = (e) => {
    setSelectedOption(e.key);
    setOpenKeys([]); // Close the menu when an item is clicked
    onChange(e.key); // Call the onChange function provided by parent
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <StyledMenu
      onClick={handleMenuClick}
      selectedKeys={selectedOption ? [selectedOption] : []} // Only set selectedKeys if selectedOption is not null
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
                  marginLeft: "10px",
                  fontSize: "16px",
                  color: "#555555",
                }}
              >
                {
                  items[0].children.find((item) => item.key === selectedOption)
                    ?.label
                }
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

export default PetWeightSelectionToggle;
