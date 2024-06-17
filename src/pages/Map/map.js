import React, { useState } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import CategoryButton from '../../components/Map/CategoryButton/CategoryButton';
import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
const Map = () => {
    const [selectedBranch, setSelectedBranch] = useState('더현대 서울');
    const [selectedFloor, setSelectedFloor] = useState('1F'); // 선택된 층 정보 상태
    const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리 정보 배열 상태

    // 지점이 변경되면 정보 초기화
    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        setSelectedFloor('1F'); //층 정보 초기화
        setSelectedCategories([]); // 카테고리 정보 초기화
    };
    // 층이 선택되면 해당 층 정보 설정
    const handleFloorSelect = (floor) => {
        setSelectedFloor(floor);
    };

    // 카테고리가 선택되면 해당 카테고리 정보 설정
    const handleCategoriesSelect = (category) => {
        const index = selectedCategories.indexOf(category);
        let updatedCategories;

        if (index === -1) {
            updatedCategories = [...selectedCategories, category]; // 선택되지 않은 카테고리 추가
        } else {
            updatedCategories = selectedCategories.filter((cat) => cat !== category); // 선택된 카테고리 제거
        }

        setSelectedCategories(updatedCategories);

        // 즉시 alert로 선택된 정보 보여주기
        alert(`${selectedBranch}, ${selectedFloor}, ${updatedCategories} 버튼 클릭됨`);
    };

    return (
        <div>
            {/* <Floor /> */}
            {/* <Search /> */}
            {/* <CategoryButton /> */}
            {/* <Title />  */}
            <BranchSearch />
        </div>
    );
};

export default Map;
