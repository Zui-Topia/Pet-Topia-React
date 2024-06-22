import React, { useState, useEffect } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import BranchSearch from '../../components/Main/BranchSearch';
import styled from 'styled-components';
import Header from '../../components/Main/Common/Header';
import MarkerRenderer from '../../components/Map/CategoryButton/MarkerRenderer';
import MapAPI from '../../api/MapPage/MapPageAPI';
import SearchActiveContainer from '../../components/Map/Search/SearchActiveContainer';
import locationImg from '../../assets/images/location.png';
import SearchInfo from '../../components/Map/Search/SearchInfo';
import { useLocation } from 'react-router-dom';

const MapPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MapPageBottomContainer = styled.div`
    width: 100vw;
    height: 882px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const MapPageBottomInContainer = styled.div`
    width: 1212px;
    height: 740px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
`;

const FloorInfo = styled.div`
    display: flex;
    flex-direction: row;
`;
const BranchSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    z-index: 1;
`;

const CateSearchContainer = styled.div`
    padding: 10px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BranchTextContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

const BranchIIcon = styled.div`
    margin-top: 13px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    background-image: url(${locationImg});
`;

const BranchText = styled.h1`
    font-weight: 400;
    font-family: 'Kanit-Regular', Helvetica;
    font-size: 25px;
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
    const location = useLocation();
    const { branch, key } = location.state || { branch: '더현대 서울', key: 1 };

    const [markerData, setMarkerData] = useState([]);
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerData);
    const [selectedBranch, setSelectedBranch] = useState(branch);
    const [selectedFloor, setSelectedFloor] = useState('1F');
    const [selectedBranchKey, setSelectedBranchKey] = useState(key);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [floorImagePath, setFloorImagePath] = useState('');
    const [mapId, setMapId] = useState(7);
    const [strollerCnt, setStrollerCnt] = useState(0);
    const [floors, setFloors] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [places, setPlaces] = useState([]);
    // 서버 통신해서 마커 표시하기
    //   const [markerData, setMarkerData] = useState([]);
    //   const [filteredMarkerData, setFilteredMarkerData] = useState(markerData); // 필터링된 마커 데이터 상태 추가
    //   const [selectedBranch, setSelectedBranch] = useState("더현대 서울");
    //   const [selectedFloor, setSelectedFloor] = useState("1F"); // 선택된 층 정보 상태
    //   const [selectedBranchKey, setSelectedBranchKey] = useState(1); // 선택된 지점의 key 상태 추가
    //   const [selectedCategories, setSelectedCategories] = useState([0]); // 선택된 카테고리 정보 배열 상태
    //   const [floorImagePath, setFloorImagePath] = useState("");
    //   const [mapId, setMapId] = useState(7);
    //   const [strollerCnt, setStrollerCnt] = useState(0);
    //   // 선택된 지점의 층 정보 상태 추가
    //   const [floors, setFloors] = useState([]);
    //   //검색 아이콘 클릭
    //   const [searchClicked, setSearchClicked] = useState(false);
    //   const [searchText, setSearchText] = useState("");
    //   const [places, setPlaces] = useState([]);

    useEffect(() => {
        // 기본적으로 "ALL" 버튼 활성화
        setSelectedCategories([0]);
    }, []);

    useEffect(() => {
        const fetchBranchData = async () => {
            try {
                if (selectedBranchKey !== null) {
                    const response = await MapAPI.getSearchInfo(selectedBranchKey);
                    const data = response.data.data;
                    setPlaces(data);
                }
            } catch (error) {
                console.error('지점 장소 정보를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchBranchData();
    }, [selectedBranchKey]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedBranchKey !== null) {
                    const response = await MapAPI.getListFloorMapId(selectedBranchKey);
                    const data = response.data.data;
                    const convertedFloorsData = data.map((item) => {
                        let floorLabel;
                        if (item.floor < 0) {
                            floorLabel = `B${Math.abs(item.floor)}`;
                        } else if (item.floor > 0) {
                            floorLabel = `${item.floor}F`;
                        } else {
                            floorLabel = item.floor;
                        }
                        return {
                            ...item,
                            floor: floorLabel,
                            mapImg: `branch_${selectedBranchKey}_floor_${item.floor}.png`,
                            mapId: item.mapId,
                        };
                    });

                    setFloors(convertedFloorsData);
                    const initialFloor = convertedFloorsData.find((item) => item.floor === '1F');
                    if (initialFloor) {
                        setSelectedFloor('1F');
                        setFloorImagePath(require(`../../assets/images/map/${initialFloor.mapImg}`));
                    }
                }
            } catch (error) {
                console.error('층 정보를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchData();
    }, [selectedBranchKey]);

    useEffect(() => {
        const fetchMarkerData = async () => {
            if (mapId) {
                try {
                    const response = await MapAPI.getMapInfo(mapId);
                    const data = response.data.data;
                    setMarkerData(data);
                    setFilteredMarkerData(data);
                } catch (error) {
                    console.error('마커 데이터를 가져오는 중 오류가 발생했습니다:', error);
                }
            }
        };

        fetchMarkerData();
    }, [mapId]);

    const handleBranchChange = (branch, key) => {
        setSelectedBranch(branch);
        setSelectedBranchKey(key);
        setSelectedFloor('1F');
        setSelectedCategories([0]);
        setMarkerData([]);
        setFilteredMarkerData([]);
        setMapId(null); // 초기화
        // Fetch new floor data for the selected branch
        const fetchData = async () => {
            try {
                const response = await MapAPI.getListFloorMapId(key);
                const data = response.data.data;
                const convertedFloorsData = data.map((item) => {
                    let floorLabel;
                    if (item.floor < 0) {
                        floorLabel = `B${Math.abs(item.floor)}`;
                    } else if (item.floor > 0) {
                        floorLabel = `${item.floor}F`;
                    } else {
                        floorLabel = item.floor;
                    }
                    return {
                        ...item,
                        floor: floorLabel,
                        mapImg: `branch_${key}_floor_${item.floor}.png`,
                        mapId: item.mapId,
                    };
                });

                setFloors(convertedFloorsData);
                const initialFloor = convertedFloorsData.find((item) => item.floor === '1F');
                if (initialFloor) {
                    setFloorImagePath(require(`../../assets/images/map/${initialFloor.mapImg}`));
                    setMapId(initialFloor.mapId); // Set mapId to the initial floor's mapId
                }
            } catch (error) {
                console.error('층 정보를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchData();
    };

    const handleFloorSelect = (floor) => {
        setSelectedFloor(floor);
        const selectedFloorData = floors.find((item) => item.floor === floor);
        if (selectedFloorData) {
            setFloorImagePath(require(`../../assets/images/map/${selectedFloorData.mapImg}`));
            if (selectedFloorData.mapId) {
                setMapId(selectedFloorData.mapId);
            } else {
                console.error('Selected floor data does not have mapId:', selectedFloorData);
            }
        } else {
            console.error('Selected floor data not found for floor:', floor);
        }

        // 마커 데이터 초기화
        setMarkerData([]);
        // "ALL" 버튼을 선택한 것으로 초기화
        setSelectedCategories([0]);
    };

    // useEffect를 사용하여 필터링된 데이터 설정
    useEffect(() => {
        if (selectedCategories.includes(0)) {
            setFilteredMarkerData(markerData); // "ALL" 선택 시 모든 마커 데이터를 표시
        } else {
            // 필터링된 마커 데이터 생성
            const filteredData = markerData.filter((marker) => selectedCategories.includes(marker.categoryId));
            // 필터링된 마커 데이터를 MarkerRenderer에 전달
            setFilteredMarkerData(filteredData);
        }
    }, [markerData, selectedCategories]);

    const handleCategoriesSelect = (category) => {
        const index = selectedCategories.indexOf(category);
        let updatedCategories;

        if (category === 0) {
            // "ALL" 버튼을 눌렀을 때
            if (selectedCategories.includes(0)) {
                updatedCategories = []; // 이미 선택된 경우 초기화
            } else {
                updatedCategories = [0]; // 선택된 경우 "ALL"만 남김
            }
        } else {
            // 다른 카테고리 버튼을 눌렀을 때
            if (selectedCategories.includes(0)) {
                updatedCategories = [category]; // "ALL"이 선택된 상태에서 다른 카테고리를 선택한 경우 해당 카테고리만 선택
            } else {
                const index = selectedCategories.indexOf(category);
                if (index === -1) {
                    updatedCategories = [...selectedCategories, category]; // 선택되지 않은 카테고리 추가
                } else {
                    updatedCategories = selectedCategories.filter((cat) => cat !== category); // 선택된 카테고리 제거
                }
            }
        }

        setSelectedCategories(updatedCategories);

        // 필터링된 마커 데이터 생성
        const filteredMarkerData = updatedCategories.includes(0)
            ? markerData // "ALL" 선택 시 모든 마커 표시
            : markerData.filter((marker) => updatedCategories.includes(marker.categoryId));

        // 필터링된 마커 데이터를 MarkerRenderer에 전달
        setFilteredMarkerData(filteredMarkerData);
    };

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const fetchStrollerData = async () => {
            if (selectedBranchKey && getTodayDate()) {
                try {
                    const response = await MapAPI.petStrollerCnt(selectedBranchKey, getTodayDate());
                    const data = response.data.data;
                    setStrollerCnt(data);
                } catch (error) {
                    console.error('StrollerData를 가져오는 중 오류가 발생했습니다:', error);
                }
            }
        };

        fetchStrollerData();
    }, [selectedBranchKey, getTodayDate]);

    const handleSearchClick = (text) => {
        setSearchText(text);
        setSearchClicked(true);
    };

    return (
        <MapPageContainer>
            <Header />
            <MapReservation />
            <MapPageBottomContainer>
                <BranchSearchContainer>
                    <BranchSearch onSelectBranch={handleBranchChange} />
                </BranchSearchContainer>
                <MapPageBottomInContainer>
                    <BranchTextContainer>
                        <BranchIIcon />
                        <BranchText>{selectedBranch}</BranchText>
                    </BranchTextContainer>
                    <FloorInfo>
                        <Floor floors={floors} onSelectFloor={handleFloorSelect} selectedFloor={selectedFloor} />
                        <CateSearchContainer>
                            <Search onSearchClick={handleSearchClick} />
                            {searchClicked && searchText !== '' ? (
                                <SearchInfo
                                    searchInfo={places.filter((place) => place.placeName.includes(searchText))}
                                />
                            ) : (
                                <SearchActiveContainer
                                    handleCategoriesSelect={handleCategoriesSelect}
                                    selectedCategories={selectedCategories}
                                />
                            )}
                        </CateSearchContainer>

                        <MapImageContainer floorImagePath={floorImagePath}>
                            <MarkerRenderer markerData={filteredMarkerData} strollerCnt={strollerCnt} />
                        </MapImageContainer>
                    </FloorInfo>
                </MapPageBottomInContainer>
            </MapPageBottomContainer>
        </MapPageContainer>
    );
};

export default Map;
