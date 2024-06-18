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
                    src={MARKER[data.index]}
                    style={{ left: `${data.x}px`, top: `${data.y}px` }}
                    alt={`Image ${data.index}`}
                />
            ))}
        </div>
    );
};

export default MarkerRenderer;
