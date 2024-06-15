import React, { useState } from 'react';
import styled from 'styled-components';
import categoryCircleGreyImage from '../../../assets/images/category_circle_grey.png';
import blackbagGreyImage from '../../../assets/images/blackbag_grey.png';
import categoryCirclePinkImage from '../../../assets/images/category_circle_pink.png';
import blackbagPinkImage from '../../../assets/images/blackbag_pink.png';

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

const CategoryButton = ({ image, icon, onClick, text }) => (
    <CategoryButtonWrapper>
        <CategoryButtonBox onClick={onClick} style={{ backgroundImage: `url(${image})` }}>
            <CategoryButtonIcon style={{ backgroundImage: `url(${icon})` }} />
        </CategoryButtonBox>
        <CategoryButtonText>{text}</CategoryButtonText>
    </CategoryButtonWrapper>
);

const CategoryButtonToggle = () => {
    const [isGreyButton, setIsGreyButton] = useState(true);

    const handleButtonClick = () => {
        if (isGreyButton) {
            alert('선택되었습니다.');
        } else {
            alert('취소되었습니다.');
        }
        setIsGreyButton(!isGreyButton);
    };

    return (
        <>
            {isGreyButton ? (
                <CategoryButton
                    image={categoryCircleGreyImage}
                    icon={blackbagGreyImage}
                    onClick={handleButtonClick}
                    text="배변봉투"
                />
            ) : (
                <CategoryButton
                    image={categoryCirclePinkImage}
                    icon={blackbagPinkImage}
                    onClick={handleButtonClick}
                    text="배변봉투"
                />
            )}
        </>
    );
};

export default CategoryButtonToggle;
