import React from 'react';
import styled from 'styled-components';
const SearchBottomContainer = styled.div`
    height: 100%;
    weight: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 세로 방향 시작점에 정렬 */
    text-align: left; /* 텍스트 왼쪽 정렬 */
    background-color: red;
`;

const Text = styled.h2`
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    font-size: 17px;
`;
const SearchInfo = ({ searchInfo }) => {
    // props에서 searchInfo를 디스트럭쳐링
    return (
        <SearchBottomContainer>
            {Array.isArray(searchInfo) &&
                searchInfo.map(
                    (
                        placeinfo,
                        index, // searchInfo가 배열인지 확인
                    ) => (
                        <div key={index}>
                            <Text>{placeinfo.placeName}</Text>
                            <Text>위치: {placeinfo.placeInfo}</Text>
                            {placeinfo.petZone === 1 ? (
                                <Text>동반입장 가능합니다.</Text>
                            ) : (
                                <Text>동반입장 불가능합니다.</Text>
                            )}
                        </div>
                    ),
                )}
        </SearchBottomContainer>
    );
};

export default SearchInfo;
