import React, { useState } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import CategoryButton from '../../components/Map/CategoryButton/CategoryButton';
import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
import styled from 'styled-components';
import MapImageEx from '../../assets/images/mapex.png';
import StrollerGreyImage from '../../assets/images/stroller-grey.png';
import StrollerPinkImage from '../../assets/images/stroller-pink.png';
import PlaygroundGreyImage from '../../assets/images/playground-grey.png';
import PlaygroundPinkImage from '../../assets/images/playground-pink.png';
import RestaurantGreyImage from '../../assets/images/restaurant-grey.png';
import RestaurantPinkImage from '../../assets/images/restaurant-pink.png';
import BlackbagGreyImage from '../../assets/images/blackbag-grey.png';
import BlackbagPinkImage from '../../assets/images/blackbag-pink.png';
import CafeGreyImage from '../../assets/images/cafe-grey.png';
import CafePinkImage from '../../assets/images/cafe-pink.png';
import ParkGreyImage from '../../assets/images/park-grey.png';
import ParkPinkImage from '../../assets/images/park-pink.png';

const MapPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MapPageBottomContainer = styled.div`
    width: 1212px;
    height: 882px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto; /* 가운데 정렬을 위한 마진 설정 */
`;

const MapPageBottomInContainer = styled.div`
    width: 1212px;
    height: 740px;
    display: flex;
    flex-direction: row;
    position: relative;
`;

const BranchSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; /* 층 선택 버튼 위에 오도록 설정 */
`;
const CateSearchContainer = styled.div`
    padding: 10px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 세로 방향 시작점에 정렬 */
    text-align: left; /* 텍스트 왼쪽 정렬 */
    // background-color: green;
`;

const SearchContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; /* 수평 가운데 정렬 */
`;

const CateContainer = styled.div`
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 5px;
`;
const BranchTextContainer = styled.div`
    margin-top: 50px;
    width: 100%;
`;

const BranchText = styled.h1`
    font-weight: 400;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
`;

const Text = styled.h2`
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    font-size: 17px;
`;

const MapImageContainer = styled.div`
    width: 887px;
    height: 740px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff5f5;
    background-image: url(${MapImageEx}); /* 이미지 파일 경로 설정 */
    background-size: contain; /* 이미지를 커버할 수 있도록 설정 */
    background-position: center; /* 이미지를 가운데 정렬 */
    background-repeat: no-repeat; /* 이미지 반복 없음 */
`;
const Map = () => {
    const [selectedBranch, setSelectedBranch] = useState('더현대 서울');
    const [selectedFloor, setSelectedFloor] = useState('1F'); // 선택된 층 정보 상태
    const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리 정보 배열 상태

    // 지점이 변경되면 정보 초기화
    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        setSelectedFloor('1F'); // 층 정보 초기화
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
        <MapPageContainer>
            <MapReservation /> {/* MapReservation 컴포넌트 */}
            <MapPageBottomContainer>
                <BranchSearchContainer>
                    <BranchSearch onSelectBranch={handleBranchChange} />
                </BranchSearchContainer>
                <BranchTextContainer>
                    <BranchText>{selectedBranch}</BranchText>
                </BranchTextContainer>

                <MapPageBottomInContainer>
                    <Floor onSelectFloor={handleFloorSelect} selectedFloor={selectedFloor} />
                    <CateSearchContainer>
                        <SearchContainer>
                            <Search />
                        </SearchContainer>
                        <Text>편의제공</Text>
                        <CateContainer>
                            <CategoryButton
                                icon={BlackbagGreyImage}
                                activeIcon={BlackbagPinkImage}
                                text="배변 봉투"
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('배변 봉투')}
                            />
                            <CategoryButton
                                icon={StrollerGreyImage}
                                activeIcon={StrollerPinkImage}
                                text={'개모차'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('개모차')}
                            />
                        </CateContainer>
                        <Text>편의시설</Text>
                        <CateContainer>
                            <CategoryButton
                                icon={ParkGreyImage}
                                activeIcon={ParkPinkImage}
                                text={'펫파크'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('펫파크')}
                            />
                            <CategoryButton
                                icon={PlaygroundGreyImage}
                                activeIcon={PlaygroundPinkImage}
                                text={'애견 놀이터'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('애견 놀이터')}
                            />
                            <CategoryButton
                                icon={RestaurantGreyImage}
                                activeIcon={RestaurantPinkImage}
                                text={'동반 식당'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('동반 식당')}
                            />
                            <CategoryButton
                                icon={CafeGreyImage}
                                activeIcon={CafePinkImage}
                                text={'동반 카페'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('동반 카페')}
                            />
                        </CateContainer>
                    </CateSearchContainer>
                    <MapImageContainer></MapImageContainer>
                </MapPageBottomInContainer>
            </MapPageBottomContainer>
        </MapPageContainer>
    );
};

export default Map;
