/*지점 검색 컴포넌트*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import toggleUpImage from '../../assets/images/toggle-up.png';
import toggleDownImage from '../../assets/images/toggle-down.png';

const BranchSearchContainer = styled.div`
    width: 450px;
    height: auto;
    border: 1px solid #d9d9d9;
    background-color: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 130px;
`;

const BranchButtonWrapper = styled.div`
    border: 1px solid #d9d9d9;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #000000;
`;

const BranchButtonBox = styled.button`
    height: 50px;
    width: 100%;
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BranchSearchText = styled.div`
    color: #000000;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    margin-left: 15px;
`;

const BranchToggleIcon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${(props) => props.icon});
    margin-left: auto;
    background-size: cover;
`;

const CategoryList = styled.ul`
    align-items: center;
    list-style-type: none;
    height: 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const CategoryItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    color: ${(props) => (props.selected ? '#000000' : '#b9b9b9')};
    font-size: 15px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    text-align: center;
`;

const ItemList = styled.ul`
    border-top: 1px solid #f5f5f5;
    list-style-type: none;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
`;

const Item = styled.li`
    text-align: center;
    cursor: pointer;
    height: 40px;
    color: ${(props) => (props.selected ? '#000000' : '#b9b9b9')};
    font-size: 15px;
    font-weight: 700;
    font-family: 'Kanit-Bold', Helvetica;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BranchSearchButton = ({ icon, onClick, selectedBranch }) => {
    return (
        <BranchButtonWrapper>
            <BranchButtonBox onClick={onClick}>
                <BranchSearchText>{selectedBranch ? selectedBranch : '지점검색'}</BranchSearchText>
                <BranchToggleIcon icon={icon} />
            </BranchButtonBox>
        </BranchButtonWrapper>
    );
};

const BranchSearchButtonToggle = ({ onSelectBranch }) => {
    const [isClickButton, setIsClickButton] = useState(false);
    const [category, setCategory] = useState('현대백화점');
    const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

    useEffect(() => {
        setSelectedCategoryItems(items[category]);
        setSelectedItem(null);
    }, [category]);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleButtonClick = () => {
        setIsClickButton(!isClickButton);
    };

    const categories = ['현대백화점', 'U-PLEX', '아울렛'];

    const items = {
        현대백화점: [
            '더현대 서울',
            '압구정본점',
            '무역센터점',
            '천호점',
            '신촌점',
            '미아점',
            '목동점',
            '중동점',
            '판교점',
            '킨텍스점',
            '디큐브시티',
            '부산점',
            '더현대 대구',
            '울산점',
            '울산동구점',
            '충청점',
        ],
        'U-PLEX': ['신촌점', '중동점', '충청점', '디큐브시티', '판교점'],
        아울렛: ['김포점', '송도점', '가산점', '동대문점', '가든파이브점', '대구점', '대전점', 'SPACE1'],
    };

    const itemIndices = {};
    Object.keys(items).forEach((category) => {
        items[category].forEach((item, index) => {
            itemIndices[item] = index + 1;
        });
    });

    const handleCategoryClick = (cate) => {
        setCategory(cate);
        setSelectedCategoryItems(items[cate] || []);
        setSelectedItem(null);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        const key = itemIndices[item];
        onSelectBranch(item, key);
        setIsClickButton(false);
    };

    return (
        <BranchSearchContainer>
            <BranchSearchButton
                icon={isClickButton ? toggleUpImage : toggleDownImage}
                onClick={handleButtonClick}
                selectedBranch={selectedItem}
            />
            {isClickButton && (
                <>
                    <CategoryList>
                        {categories.map((cate) => (
                            <CategoryItem
                                key={cate}
                                selected={category === cate}
                                onClick={() => handleCategoryClick(cate)}
                            >
                                {cate}
                            </CategoryItem>
                        ))}
                    </CategoryList>
                    <ItemList>
                        {selectedCategoryItems.map((item, index) => (
                            <Item
                                key={index + 1}
                                selected={selectedItem === item}
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </Item>
                        ))}
                    </ItemList>
                </>
            )}
        </BranchSearchContainer>
    );
};

const BranchSearch = ({ onSelectBranch }) => {
    return <BranchSearchButtonToggle onSelectBranch={onSelectBranch} />;
};

export default BranchSearch;
