import React, { useState, useEffect } from 'react';
import Floor from '../../components/Map/Floor/Floor';
import Search from '../../components/Map/Search/Search';
import MapReservation from '../../components/Main/Common/MapReservation';
import BranchSearch from '../../components/Map/BranchSearch/BranchSearch';
import styled from 'styled-components';
import Header from '../../components/Main/Common/Header';
import MarkerRenderer from '../../components/Map/CategoryButton/MarkerRenderer';
import MapAPI from '../../api/MapPage/MapPageAPI';
import SearchActiveContainer from '../../components/Map/Search/SearchActiveContainer';
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
    flex-direction: row;
    position: relative;
    justify-content: center; /* 수평 중앙 정렬 추가 */
    align-items: center; /* 수직 중앙 정렬 추가 */
`;

const BranchSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    z-index: 1; /* 층 선택 버튼 위에 오도록 설정 */
`;

const CateSearchContainer = styled.div`
    padding: 10px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center; /* 세로 방향 시작점에 정렬 */
    //background-color: green;
`;

const BranchTextContainer = styled.div`
    margin-top: 20px; /* 적절한 값으로 수정 */
    width: 100%;
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 추가 */
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
    // 서버 통신해서 마커 표시하기
    const [markerData, setMarkerData] = useState([]);
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerData); // 필터링된 마커 데이터 상태 추가
    const [selectedBranch, setSelectedBranch] = useState('더현대 서울');
    const [selectedFloor, setSelectedFloor] = useState('1F'); // 선택된 층 정보 상태
    const [selectedBranchKey, setSelectedBranchKey] = useState(1); // 선택된 지점의 key 상태 추가
    const [selectedCategories, setSelectedCategories] = useState([]); // 선택된 카테고리 정보 배열 상태
    const [floorImagePath, setFloorImagePath] = useState('');
    const [mapId, setMapId] = useState(7);

    // 선택된 지점의 층 정보 상태 추가
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedBranchKey !== null) {
                    // selectedBranchKey가 null이 아닐 때만 요청
                    // 서버에서 층 정보 가져오기: map
                    const response = await MapAPI.getListFloorMapId(selectedBranchKey);
                    const data = response.data.data;
                    //console.log(response);
                    //console.log(data);

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
                            mapId: item.mapId,
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

    useEffect(() => {
        console.log('useEffect triggered with mapId:', mapId);

        const fetchMarkerData = async () => {
            if (mapId) {
                try {
                    const response = await MapAPI.getMapInfo(mapId);
                    const data = response.data.data;
                    console.log('Fetched marker data:', data);
                    setMarkerData(data);
                } catch (error) {
                    console.error('마커 데이터를 가져오는 중 오류가 발생했습니다:', error);
                }
            }
        };

        fetchMarkerData();
    }, [mapId]);

    // 지점이 변경되면 정보 초기화
    const handleBranchChange = (branch, key) => {
        setSelectedBranch(branch);
        setSelectedBranchKey(key); // key 상태 설정
        setSelectedFloor('1F'); // 층 정보 초기화
        setSelectedCategories([]); // 카테고리 정보 초기화
        // 마커 데이터 초기화
        setMarkerData([]);
    };

    // 층이 선택되면 해당 층 정보 설정
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
        // 카테고리 초기화
        setSelectedCategories([]);
    };

    // useEffect를 사용하여 필터링된 데이터 설정
    useEffect(() => {
        // 필터링된 마커 데이터 생성
        const filteredData = markerData.filter((marker) => selectedCategories.includes(marker.categoryId));
        // 필터링된 마커 데이터를 MarkerRenderer에 전달
        setFilteredMarkerData(filteredData);
    }, [markerData, selectedCategories]);

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
        console.log('updatedCategories data:', updatedCategories);
        // 필터링된 마커 데이터 생성
        const filteredMarkerData = markerData.filter((marker) => updatedCategories.includes(marker.categoryId));

        // 콘솔에 필터링된 데이터 출력 (테스트용)
        console.log('Filtered marker data:', filteredMarkerData);

        // 필터링된 마커 데이터를 MarkerRenderer에 전달
        setFilteredMarkerData(filteredMarkerData);
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
                        <Search />
                        <SearchActiveContainer
                            handleCategoriesSelect={handleCategoriesSelect}
                            selectedCategories={selectedCategories}
                        />
                    </CateSearchContainer>

                    <MapImageContainer floorImagePath={floorImagePath}>
                        <MarkerRenderer markerData={filteredMarkerData} />
                    </MapImageContainer>
                </MapPageBottomInContainer>
            </MapPageBottomContainer>
        </MapPageContainer>
    );
};

export default Map;
