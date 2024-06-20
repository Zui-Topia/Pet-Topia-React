import React, { useState } from 'react';
import { MARKER } from '../../../constants/imagePaths';
import CategoryMarker from './CategoryMarker';
import { Popover } from 'antd';

const MarkerRenderer = ({ markerData }) => {
    const [visible, setVisible] = useState({});

    const handleVisibleChange = (key, newVisible) => {
        setVisible({ ...visible, [key]: newVisible });
    };

    return (
        <div>
            {markerData.map((data, idx) => {
                const isCategory2 = data.categoryId === 2;
                const popoverContent = isCategory2 ? <div></div> : `${data.placeInfo}`;

                const popoverTitle = isCategory2 ? `잔여갯수 : 3 개` : '위치';

                return (
                    <Popover
                        key={idx}
                        title={popoverTitle}
                        content={popoverContent}
                        visible={visible[idx] || false}
                        placement="top"
                        trigger={isCategory2 ? 'contextMenu' : 'hover'} // isCategory2가 true일 때는 click으로, 아니면 hover로 설정
                        onVisibleChange={(newVisible) => handleVisibleChange(idx, newVisible)}
                        overlayStyle={isCategory2 ? {} : { zIndex: 1000 }} // 크기 지정
                    >
                        <CategoryMarker
                            src={MARKER[data.categoryId]}
                            style={{ left: `${data.placePositionX}px`, top: `${data.placePositionY}px` }}
                            alt={`Image ${data.categoryId}`}
                            onClick={() => handleVisibleChange(idx, !visible[idx])} // 클릭 시 visible 상태를 토글
                        />
                    </Popover>
                );
            })}
        </div>
    );
};

export default MarkerRenderer;
