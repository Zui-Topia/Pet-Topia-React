import React from 'react';

import styled from 'styled-components';

import { Divider } from 'antd';
import Input from '../../components/User/Input/Input';
import PasswordInput from '../../components/User/Input/Password';

const Container = styled.div`
    // 가운데 정렬 위한 컴포넌트
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; /* 필요에 따라 조정 */
    max-width: 800px; /* 최대 너비를 더 크게 설정 */
    margin: 0 auto;
`;

const Heading = styled.h2`
    font-family: 'Kanit';
    font-weight: 400;
    text-align: ${({ align }) => align || 'left'}; /* 기본값은 왼쪽 정렬 */
    width: 100%; /* 전체 너비로 설정하여 text-align이 작동하도록 함 */
    margin: ${({ margin }) => margin || '0'}; /* 마진을 prop으로 받음, 기본값은 0 */
    margin-left: ${({ marginLeft }) => marginLeft || '0'}; /* 왼쪽 마진을 prop으로 받음, 기본값은 0 */
    margin-top: ${({ marginTop }) => marginTop || '0'}; /* 왼쪽 마진을 prop으로 받음, 기본값은 0 */
`;

const StyledDivider = styled(Divider)`
    border-color: black; /* 구분선 색깔 */
`;

const DividerWrapper = styled.div`
    width: 50%; /* 구분선 길이 */
    margin: 0 auto;
`;

function Signup() {
    return (
        <Container>
            <Heading align="left" marginLeft="450px" marginTop="70px">
                회원가입
            </Heading>
            <DividerWrapper>
                <StyledDivider />
            </DividerWrapper>
            <Input placeholder="이메일을 입력하세요" />
            <PasswordInput placeholder="비밀번호를 입력하세요" />
            <PasswordInput placeholder="비밀번호를 확인하세요" />
        </Container>
    );
}

export default Signup;
