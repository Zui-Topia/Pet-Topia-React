import instance from "../Index";

const MapAPI = {
  // 지점의 층정보 가져오기
  getListFloorMapId: (selectedBranchKey) => {
    return instance.get(`/map/branch/${selectedBranchKey}/floors`);
  },
  // 지점/ 층에 대한 지도 정보 가져오기
  getMapInfo: (mapId) => {
    return instance.get(`/map/${mapId}/places`);
  },
  // 개모차 잔여갯수
  petStrollerCnt: (branchId, reservationDate) => {
    return instance.get(
      `/reservation/${branchId}?reservationDate=${reservationDate}`
    );
  },
  //검색 기능 (확장 가능성)
  getSearchInfo: (selectedBranchKey) => {
    return instance.get(`/map/branch/${selectedBranchKey}/places`);
  },
};
export default MapAPI;
