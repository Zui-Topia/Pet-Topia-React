import React, { useState } from "react";
import { Menu } from "antd";
import styled from "styled-components";

// 메뉴 항목 데이터 정의
const items = [
  {
    key: "sub4",
    label: "체고", // 메뉴 레이블
    children: [
      {
        key: "10",
        label: "10cm 이상 20cm 미만",
      },
      {
        key: "20",
        label: "20cm 이상 30cm 미만",
      },
      {
        key: "30",
        label: "30cm 이상 40cm 미만",
      },
      {
        key: "40",
        label: "40cm 이상 50cm 미만",
      },
      {
        key: "50",
        label: "50cm 이상 60cm 미만",
      },
    ],
  },
];

// PetSizeSelectionToggle 컴포넌트 정의
const PetSizeSelectionToggle = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null); // 초기 선택된 옵션은 없음
  const [openKeys, setOpenKeys] = useState([]);

  // 메뉴 클릭 핸들러
  const handleMenuClick = (e) => {
    setSelectedOption(e.key); // 선택된 옵션 업데이트
    setOpenKeys([]); // 메뉴를 닫음
    onChange(e.key); // 부모 컴포넌트로 변경 사항 전달
  };

  // 서브메뉴 열림 상태 변경 핸들러
  const handleOpenChange = (keys) => {
    setOpenKeys(keys); // 열린 서브메뉴 키 업데이트
  };

  return (
    <StyledMenu
      onClick={handleMenuClick} // 메뉴 클릭 이벤트 핸들러 설정
      selectedKeys={selectedOption ? [selectedOption] : []} // 선택된 옵션이 있을 경우 설정
      openKeys={openKeys} // 열린 서브메뉴 키 설정
      onOpenChange={handleOpenChange} // 서브메뉴 열림 상태 변경 이벤트 핸들러 설정
      mode="inline" // 인라인 모드 설정
    >
      <StyledSubMenu
        key={items[0].key} // 서브메뉴 키 설정
        title={
          <React.Fragment>
            {items[0].label} {/* 서브메뉴 레이블 */}
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
                    ?.label // 선택된 옵션 레이블 표시
                }
              </span>
            )}
          </React.Fragment>
        }
      >
        {items[0].children.map((child) => (
          <MenuItem key={child.key}>{child.label}</MenuItem> // 서브메뉴 아이템 렌더링
        ))}
      </StyledSubMenu>
    </StyledMenu>
  );
};

// 스타일이 적용된 메뉴 컴포넌트 정의
const StyledMenu = styled(Menu)`
  width: 550px; // 너비 550px
  height: auto;
  overflow-y: auto; // 수직 스크롤 활성화
  border: 1px solid #d9d9d9; // 테두리 색상 설정
`;

// 스타일이 적용된 메뉴 아이템 컴포넌트 정의
const MenuItem = styled(Menu.Item)`
  && {
    font-family: "Kanit", sans-serif; // 글꼴 Kanit
    font-size: 20px; // 글자 크기 20px
    color: #9b9b9b; // 글자 색상 회색
  }
`;

// 스타일이 적용된 서브메뉴 컴포넌트 정의
const StyledSubMenu = styled(Menu.SubMenu)`
  && {
    .ant-menu-submenu-title {
      height: 40px; // 높이 40px
      line-height: 40px; // 줄 높이 40px
      display: flex; // Flexbox 사용
      justify-content: space-between; // 공간을 고르게 배분
      align-items: center; // 아이템들을 수직으로 가운데 정렬
    }

    .ant-menu {
      max-height: 280px; // 최대 높이 280px
      overflow-y: auto; // 수직 스크롤 활성화
    }
  }
`;

export default PetSizeSelectionToggle;
