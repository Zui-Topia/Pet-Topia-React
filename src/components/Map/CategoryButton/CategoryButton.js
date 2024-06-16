import React, { useState } from 'react';
import styled from 'styled-components';
import categoryCircleGreyImage from '../../../assets/images/categorycircle-grey.png';
import blackbagGreyImage from '../../../assets/images/blackbag-grey.png';
import categoryCirclePinkImage from '../../../assets/images/categorycircle-pink.png';
import blackbagPinkImage from '../../../assets/images/blackbag-pink.png';

// 카테고리 버튼 - wrapper
const CategoryButtonWrapper = styled.div`
    height: 116px;
    width: 93px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
// 카테고리 버튼 - 버튼
const CategoryButtonBox = styled.button`
    width: 78px;
    height: 78px;
    background: none;
    border: none;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// 카테고리 버튼 - 아이콘
const CategoryButtonIcon = styled.div`
    width: 30px;
    height: 30px;
    background-size: cover;
    background-position: center;
`;
// 카테고리 버튼 - 텍스트
const CategoryButtonText = styled.div`
    color: #555555;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    margin-top: 5px;
`;

const CategoryButton = ({ icon, activeIcon, text, onSelectCategory, isActive }) => {
    const handleButtonClick = () => {
        onSelectCategory(text);
    };

    return (
        <CategoryButtonWrapper>
            <CategoryButtonBox
                onClick={handleButtonClick}
                style={{ backgroundImage: `url(${isActive ? categoryCirclePinkImage : categoryCircleGreyImage})` }}
            >
                <CategoryButtonIcon style={{ backgroundImage: `url(${isActive ? activeIcon : icon})` }} />
            </CategoryButtonBox>
            <CategoryButtonText>{text}</CategoryButtonText>
        </CategoryButtonWrapper>
    );
};

export default CategoryButton;
