/* MarkerRenderer 컴포넌트: 지도에 마커를 렌더링하고 정보 팝업을 표시 */
import React, { useState } from 'react';
import { MARKER } from '../../../constants/imagePaths';
import CategoryMarker from './CategoryMarker';
import { Popover } from 'antd';

const MarkerRenderer = ({ markerData, strollerCnt }) => {
    const [visible, setVisible] = useState({});

    const handleVisibleChange = (key, visible) => {
        setVisible({ ...visible, [key]: visible });
    };

    return (
        <div>
            {markerData.map((data, idx) => {
                const isCategory2 = data.categoryId === 2;
                const popoverContent = isCategory2 ? <div>잔여갯수 : {strollerCnt}개</div> : `${data.placeInfo}`;
                const popoverTitle = isCategory2 ? `개모차 대여소` : '위치';

                return (
                    <Popover
                        key={idx}
                        title={popoverTitle}
                        content={popoverContent}
                        visible={isCategory2 ? true : visible[idx] || false}
                        placement="top"
                        trigger={isCategory2 ? 'contextMenu' : 'hover'} // isCategory2가 true일 때는 click으로, 아니면 hover로 설정
                        onVisibleChange={(newVisible) => handleVisibleChange(idx, newVisible)}
                    >
                        <CategoryMarker
                            src={MARKER[data.categoryId]}
                            style={{
                                left: `${data.placePositionX}px`,
                                top: `${data.placePositionY}px`,
                            }}
                            alt={`Image ${data.categoryId}`}
                            onClick={() => handleVisibleChange(idx, true)}
                        />
                    </Popover>
                );
            })}
        </div>
    );
};

export default MarkerRenderer;
