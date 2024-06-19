import instance from '../Index';

const MapAPI = {
    getListFloorMapId: (selectedBranchKey) => {
        return instance.get(`/map/branch/${selectedBranchKey}/floors`);
    },
    getMapInfo: (mapId) => {
        return instance.get(`/map/${mapId}/places`);
    },
};
export default MapAPI;
