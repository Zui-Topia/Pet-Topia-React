import React, { useState, useEffect } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import CategoryButton from '../../components/Map/CategoryButton/CategoryButton';
import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
import styled from 'styled-components';

import { IMAGE_PATHS } from '../../constants/imagePaths';
import Header from '../../components/Main/Common/Header';
import MarkerRenderer from '../../components/Map/CategoryButton/MarkerRenderer';
import axios from 'axios';

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
    background-image: ${(props) => `url(${props.floorImagePath})`};
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
    const [selectedBranchKey, setSelectedBranchKey] = useState(1); // 선택된 지점의 key 상태 추가
    const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리 정보 배열 상태
    const [floorImagePath, setFloorImagePath] = useState('');
    useEffect(() => {
        // 서버에서 데이터 가져오기(예시 데이터)
        const fetchData = async () => {
            const dataFromServer = [
                // 서버에 mapId, categoryId 보내면 받는 데이터
                { index: 1, x: 100, y: 300 }, // 마커의 인덱스, 위치 좌표
                { index: 3, x: 300, y: 400 },
                { index: 5, x: 300, y: 500 },
            ];
            setMarkerData(dataFromServer);
        };
        fetchData();
    }, [selectedBranch, selectedFloor, selectedCategories]);

    // 선택된 지점의 층 정보 상태 추가
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedBranchKey !== null) {
                    // selectedBranchKey가 null이 아닐 때만 요청
                    // 서버에서 층 정보 가져오기: map
                    const response = await axios.get(`http://localhost:8081/map/branch/${selectedBranchKey}/floors`);
                    const data = response.data.data;
                    console.log(response);
                    console.log(data);

                    // // 층 id 변환
                    const convertedFloorsData = data.map((item) => {
                        let floorLabel;
                        if (item.floor < 0) {
                            floorLabel = `B${Math.abs(item.floor)}`;
                        } else if (item.floor > 0) {
                            floorLabel = `${item.floor}F`;
                        } else {
                            floorLabel = item.floor;
                        }
                        console.log(floorLabel); // 여기서 변환된 층 정보 확인
                        return {
                            ...item,
                            floor: floorLabel,
                            mapImg: `branch_${selectedBranchKey}_floor_${item.floor}.png`,
                        };
                    });

                    setFloors(convertedFloorsData); // 층 정보 설정

                    // 초기 층 정보 설정: 첫 번째 층('1F')으로 자동 설정
                    const initialFloor = convertedFloorsData.find((item) => item.floor === '1F');
                    if (initialFloor) {
                        setSelectedFloor('1F');
                        setFloorImagePath(require(`../../assets/images/map/${initialFloor.mapImg}`));
                    }
                }
            } catch (error) {
                console.error('층 정보를 가져오는 중 오류가 발생했습니다:', error);
                // 에러 처리 로직 추가
            }
        };

        fetchData();
    }, [selectedBranch]); // 선택된 지점이 변경될 때마다 층 정보 다시 가져오기

    // 지점이 변경되면 정보 초기화
    const handleBranchChange = (branch, key) => {
        setSelectedBranch(branch);
        setSelectedBranchKey(key); // key 상태 설정
        setSelectedFloor('1F'); // 층 정보 초기화
        setSelectedCategories([]); // 카테고리 정보 초기화
    };

    // 층이 선택되면 해당 층 정보 설정
    const handleFloorSelect = (floor) => {
        setSelectedFloor(floor);
        const selectedFloorData = floors.find((item) => item.floor === floor);
        if (selectedFloorData) {
            setFloorImagePath(require(`../../assets/images/map/${selectedFloorData.mapImg}`));
        }
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
                    <Floor
                        floors={floors} // 동적으로 생성할 층 정보 전달
                        onSelectFloor={handleFloorSelect}
                        selectedFloor={selectedFloor}
                    />
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
                    <MapImageContainer floorImagePath={floorImagePath}>
                        <MarkerRenderer markerData={markerData} />
                    </MapImageContainer>
                </MapPageBottomInContainer>
            </MapPageBottomContainer>
        </MapPageContainer>
    );
};

export default Map;
