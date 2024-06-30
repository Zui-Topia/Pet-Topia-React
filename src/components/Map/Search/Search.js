import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Search = ({ onSearchClick }) => {
  return (
    <SearchContainer>
      <SearchBox>
        <SearchInput type="text" placeholder="검색어를 입력해주세요." />
        <SearchIconButton onClick={onSearchClick}>
          <SearchIcon />
        </SearchIconButton>
      </SearchBox>
    </SearchContainer>
  );
};

// 검색 박스 wrapper
const SearchBox = styled.div`
  height: 55px;
  width: 245px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
// 검색 글 쓰는 input
const SearchInput = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #d9d9d9;
  height: 55px;
  position: absolute;
  width: 100%; /* 부모 요소의 너비를 기준으로 설정 */
  padding-left: 10px;
  padding-right: 40px; /* 아이콘의 너비만큼 패딩 추가 */
  box-sizing: border-box; /* 패딩이 전체 너비에 포함되도록 설정 */
`;
// 검색아이콘 누르는 버튼
const SearchIconButton = styled.button`
  position: absolute;
  right: 15px; /* 오른쪽으로부터 10px 떨어지도록 설정 */
  width: 28px;
  height: 28px;
  background: none; /* 배경을 투명으로 설정 */
  border: none; /* 테두리를 제거 */
  cursor: pointer; /* 커서를 포인터로 변경 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
const SearchContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
`;
// 검색아이콘
const SearchIcon = styled(SearchOutlined)`
  color: grey;
  font-size: 20px;
`;
export default Search;
