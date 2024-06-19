import React, { useState } from 'react';
import { MARKER } from '../../../constants/imagePaths';
import CategoryMarker from './CategoryMarker';
import { Popover } from 'antd';

const MarkerRenderer = ({ markerData }) => {
    const [visible, setVisible] = useState({});

    const handleVisibleChange = (key, visible) => {
        setVisible({ ...visible, [key]: visible });
    };

    return (
        <div>
            {markerData.map((data, idx) => (
                <Popover
                    key={idx}
                    title="위치"
                    content={`${data.placeInfo}`}
                    visible={visible[idx] || false}
                    placement="top"
                    onVisibleChange={(newVisible) => handleVisibleChange(idx, newVisible)}
                >
                    <CategoryMarker
                        src={MARKER[data.categoryId]}
                        style={{ left: `${data.placePositionX}px`, top: `${data.placePositionY}px` }}
                        alt={`Image ${data.categoryId}`}
                        onClick={() => handleVisibleChange(idx, true)}
                    />
                </Popover>
            ))}
        </div>
    );
};

export default MarkerRenderer;
