import React from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import { IMAGE_PATHS } from '../../../constants/imagePaths';
import styled from 'styled-components';
const SearchBottomContainer = styled.div`
    height: 100%;
    weight: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 세로 방향 시작점에 정렬 */
    text-align: left; /* 텍스트 왼쪽 정렬 */
    //background-color: red;
`;
const CateContainer = styled.div`
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 5px;
`;
const Text = styled.h2`
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    font-size: 17px;
`;
const SearchActiveContainer = ({ handleCategoriesSelect, selectedCategories }) => {
    return (
        <SearchBottomContainer>
            <Text>편의제공</Text>
            <CateContainer>
                <CategoryButton
                    icon={IMAGE_PATHS.BLACKBAG_GREY}
                    activeIcon={IMAGE_PATHS.BLACKBAG_PINK}
                    text="배변 봉투"
                    onSelectCategory={() => handleCategoriesSelect(1)} // 숫자 1을 전달
                    isActive={selectedCategories.includes(1)}
                />
                <CategoryButton
                    icon={IMAGE_PATHS.STROLLER_GREY}
                    activeIcon={IMAGE_PATHS.STROLLER_PINK}
                    text={'개모차'}
                    onSelectCategory={() => handleCategoriesSelect(2)}
                    isActive={selectedCategories.includes(2)}
                />
            </CateContainer>
            <Text>편의시설</Text>
            <CateContainer>
                <CategoryButton
                    icon={IMAGE_PATHS.PARK_GREY}
                    activeIcon={IMAGE_PATHS.PARK_PINK}
                    text={'펫파크'}
                    onSelectCategory={() => handleCategoriesSelect(3)}
                    isActive={selectedCategories.includes(3)}
                />
                <CategoryButton
                    icon={IMAGE_PATHS.PLAYGROUND_GREY}
                    activeIcon={IMAGE_PATHS.PLAYGROUND_PINK}
                    text={'애견 놀이터'}
                    onSelectCategory={() => handleCategoriesSelect(4)}
                    isActive={selectedCategories.includes(4)}
                />
                <CategoryButton
                    icon={IMAGE_PATHS.RESTAURANT_GREY}
                    activeIcon={IMAGE_PATHS.RESTAURANT_PINK}
                    text={'동반 식당'}
                    onSelectCategory={() => handleCategoriesSelect(5)}
                    isActive={selectedCategories.includes(5)}
                />
                <CategoryButton
                    icon={IMAGE_PATHS.CAFE_GREY}
                    activeIcon={IMAGE_PATHS.CAFE_PINK}
                    text={'동반 카페'}
                    onSelectCategory={() => handleCategoriesSelect(6)}
                    isActive={selectedCategories.includes(6)}
                />
            </CateContainer>
        </SearchBottomContainer>
    );
};

export default SearchActiveContainer;
