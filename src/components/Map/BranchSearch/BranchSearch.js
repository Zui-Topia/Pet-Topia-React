import React, { useState } from 'react';
import styled from 'styled-components';
import toggleUpImage from '../../../assets/images/toggle-up.png';
import toggleDownImage from '../../../assets/images/toggle-down.png';

// 지점검색 전체창의 컴포넌트
const BranchSearchContainer = styled.div`
    width: 450px;
    height: auto; /* 높이를 자식 요소에 맞게 자동으로 설정할 수도 있음 */
    border: 1px solid #d9d9d9; // 전체 테두리 색상
    background-color: #ffffff;
    border-radius: 8px; /* 둥근 테두리 반경 설정 */
`;

// 지점검색 부분 - wrapper
const BranchButtonWrapper = styled.div`
    border: 1px solid #d9d9d9;
    max-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #000000;
`;

// 지점검색 부분 - 버튼
const BranchButtonBox = styled.button`
    height: 60px; /* 최대 높이 설정 */
    width: 100%;
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 지점검색 부분 - 텍스트
const BranchSearchText = styled.div`
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    margin-left: 10px;
`;

// 지점검색 부분 - 위, 아래 아이콘
const BranchToggleIcon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${(props) => props.icon});
    margin-left: auto; // 왼쪽 자동 여백 설정 (오른쪽 정렬)
    background-size: cover; /* 이미지를 컨테이너 크기에 맞게 조절 */
`;

// 카테고리 리스트 - wrapper
const CategoryList = styled.ul`
    align-items: center;
    list-style-type: none;
    height: 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* 각 열의 너비를 동일하게 설정 */
`;

// 카테고리 리스트 - 안 리스트 (현대백화점, U-PLEX, 아울렛)
const CategoryItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    color: ${(props) => (props.selected ? '#000000' : '#b9b9b9')}; // 선택 여부에 따른 색상
    font-size: 15px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    text-align: center;
`;

//  아이템 리스트 - wrapper
const ItemList = styled.ul`
    border-top: 1px solid #f5f5f5;
    list-style-type: none;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* 각 열의 너비를 동일하게 설정 */
    gap: 20px;
`;
// 아이템 리스트 - 안 리스트
const Item = styled.li`
    text-align: center; /* 중앙 정렬 */
    cursor: pointer;
    height: 40px;
    color: ${(props) => (props.selected ? '#000000' : '#b9b9b9')}; /* 클릭 여부에 따른 색상 */
    font-size: 15px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 지점검색부분 클릭 버튼 - 위 아래 아이콘 변경
const BranchSearchButton = ({ icon, onClick }) => {
    return (
        <BranchButtonWrapper>
            <BranchButtonBox onClick={onClick}>
                <BranchSearchText>지점검색</BranchSearchText>
                <BranchToggleIcon icon={icon} />
            </BranchButtonBox>
        </BranchButtonWrapper>
    );
};

// 지점검색을 클릭 - 카테고리/ 아이템 초기화
const BranchSearchButtonToggle = ({ onSelectBranch }) => {
    // 버튼 클릭 상태 추적
    const [isClickButton, setIsClickButton] = useState(false);
    // 초기 카테고리 설정
    const [category, setCategory] = useState('현대백화점');
    // 현재 선택된 카테고리의 아이템 목록 추적
    const [selectedCategoryItems, setSelectedCategoryItems] = useState([
        '더현대 서울',
        '압구정본점',
        '무역센터점',
        '천호점',
        '신촌점',
        '미아점',
        '목동점',
        '중동점',
        '판교점',
        '킨텍스점',
        '디큐브시티',
        '부산점',
        '더현대 대구',
        '울산점',
        '울산동구점',
        '충청점',
    ]);

    // 현재 선택된 개별 아이템을 추적
    const [selectedItem, setSelectedItem] = useState(null);

    // 버튼 클릭 시 토글 기능
    const handleButtonClick = () => {
        setIsClickButton(!isClickButton);
    };

    // 카테고리 목록
    const categories = ['현대백화점', 'U-PLEX', '아울렛'];
    // 각 카테고리에 속한 아이템들
    const items = {
        현대백화점: [
            '더현대 서울',
            '압구정본점',
            '무역센터점',
            '천호점',
            '신촌점',
            '미아점',
            '목동점',
            '중동점',
            '판교점',
            '킨텍스점',
            '디큐브시티',
            '부산점',
            '더현대 대구',
            '울산점',
            '울산동구점',
            '충청점',
        ],
        'U-PLEX': ['U-PLEX아이템1', 'U-PLEX아이템2', 'U-PLEX아이템3', 'U-PLEX아이템4', 'U-PLEX아이템5'],
        아울렛: ['아울렛아이템1', '아울렛아이템2', '아울렛아이템3', '아울렛아이템4', '아울렛아이템5'],
    };
    // 카테고리 클릭 시 해당 카테고리의 아이템 목록 업데이트 및 선택된 아이템 초기화
    const handleCategoryClick = (cate) => {
        setCategory(cate);
        setSelectedCategoryItems(items[cate] || []);
        setSelectedItem(null); // 카테고리가 변경될 때 선택된 아이템을 초기화
    };
    // 아이템 클릭 시 선택된 아이템 설정
    const handleItemClick = (item) => {
        setSelectedItem(item);
        //alert(`${item} 버튼이 클릭되었습니다.`);
        onSelectBranch(item); // 선택된 지점을 Map 컴포넌트로 전달
        setIsClickButton(false); // 검색 토글을 닫음
    };

    return (
        <BranchSearchContainer>
            <BranchSearchButton icon={isClickButton ? toggleUpImage : toggleDownImage} onClick={handleButtonClick} />
            {isClickButton && (
                <CategoryList>
                    {categories.map((cate) => (
                        <CategoryItem key={cate} selected={category === cate} onClick={() => handleCategoryClick(cate)}>
                            {cate}
                        </CategoryItem>
                    ))}
                </CategoryList>
            )}
            {isClickButton && category && (
                <ItemList>
                    {selectedCategoryItems.map((item, index) => (
                        <Item key={index} selected={selectedItem === item} onClick={() => handleItemClick(item)}>
                            {item}
                        </Item>
                    ))}
                </ItemList>
            )}
        </BranchSearchContainer>
    );
};

export default BranchSearchButtonToggle;
