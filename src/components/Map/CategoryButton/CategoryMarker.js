//카테고리 마커 컴포넌트
import styled from 'styled-components';

// 마커 버튼 - 아이콘
const CategoryMarker = styled.button`
    width: 38px;
    height: 39px;
    position: absolute;
    background: ${(props) => `url(${props.src}) no-repeat center`};
    background-size: cover;
    border: none;
    cursor: pointer;
`;

export default CategoryMarker;
