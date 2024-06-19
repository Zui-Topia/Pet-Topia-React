import React from 'react';
import { MARKER } from '../../../constants/imagePaths';
import CategoryMarker from './CategoryMarker';

// 이미지와 좌표 정보를 받는 타입 정의
const MarkerRenderer = ({ markerData }) => {
    return (
        <div>
            {markerData.map((data, idx) => (
                <CategoryMarker
                    key={idx}
                    src={MARKER[data.categoryId]}
                    style={{ left: `${data.placePositionX}px`, top: `${data.placePositionY}px` }}
                    alt={`Image ${data.categoryId}`}
                />
            ))}
        </div>
    );
};

export default MarkerRenderer;
