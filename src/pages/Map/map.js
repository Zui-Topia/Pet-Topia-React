import React, { useState, useEffect } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import CategoryButton from '../../components/Map/CategoryButton/CategoryButton';
import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
import styled from 'styled-components';
import MapImageEx from '../../assets/images/mapex.png';
import { IMAGE_PATHS } from '../../constants/imagePaths';
import Header from '../../components/Main/Common/Header';
import MarkerRenderer from '../../components/Map/CategoryButton/MarkerRenderer';

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
    top: 140px;
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
    background-image: url(${MapImageEx});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`;

const Map = () => {
    // 서버 통신해서 마커 표시하기
    const [markerData, setMarkerData] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('더현대 서울');
    const [selectedFloor, setSelectedFloor] = useState('1F'); // 선택된 층 정보 상태
    const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리 정보 배열 상태

    useEffect(() => {
        // 서버에서 데이터 가져오기(예시 데이터)
        const fetchData = async () => {
            const dataFromServer = [
                { index: 1, x: 100, y: 300 }, // 마커의 인덱스, 위치 좌표
                { index: 3, x: 300, y: 400 },
                { index: 5, x: 300, y: 600 },
            ];
            setMarkerData(dataFromServer);
        };
        fetchData();
    }, [selectedBranch, selectedFloor, selectedCategories]);

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
        // 이 값을 서버에 보내줘야함!
        alert(`${selectedBranch}, ${selectedFloor}, ${updatedCategories} 버튼 클릭됨`);
    };

    return (
        <MapPageContainer>
            <Header />
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
                                icon={IMAGE_PATHS.BLACKBAG_GREY}
                                activeIcon={IMAGE_PATHS.BLACKBAG_PINK}
                                text="배변 봉투"
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('배변 봉투')}
                            />
                            <CategoryButton
                                icon={IMAGE_PATHS.STROLLER_GREY}
                                activeIcon={IMAGE_PATHS.STROLLER_PINK}
                                text={'개모차'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('개모차')}
                            />
                        </CateContainer>
                        <Text>편의시설</Text>
                        <CateContainer>
                            <CategoryButton
                                icon={IMAGE_PATHS.PARK_GREY}
                                activeIcon={IMAGE_PATHS.PARK_PINK}
                                text={'펫파크'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('펫파크')}
                            />
                            <CategoryButton
                                icon={IMAGE_PATHS.PLAYGROUND_GREY}
                                activeIcon={IMAGE_PATHS.PLAYGROUND_PINK}
                                text={'애견 놀이터'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('애견 놀이터')}
                            />
                            <CategoryButton
                                icon={IMAGE_PATHS.RESTAURANT_GREY}
                                activeIcon={IMAGE_PATHS.RESTAURANT_PINK}
                                text={'동반 식당'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('동반 식당')}
                            />
                            <CategoryButton
                                icon={IMAGE_PATHS.CAFE_GREY}
                                activeIcon={IMAGE_PATHS.CAFE_PINK}
                                text={'동반 카페'}
                                onSelectCategory={handleCategoriesSelect}
                                isActive={selectedCategories.includes('동반 카페')}
                            />
                        </CateContainer>
                    </CateSearchContainer>
                    <MapImageContainer>
                        <MarkerRenderer markerData={markerData} />
                    </MapImageContainer>
                </MapPageBottomInContainer>
            </MapPageBottomContainer>
        </MapPageContainer>
    );
};

export default Map;
