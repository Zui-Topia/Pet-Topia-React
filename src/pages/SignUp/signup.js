import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message, Layout, Input, Divider, Modal } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import PetWeightSelectionToggle from "../../components/User/Input/PetWeightSelection";
import PetSizeSelectionToggle from "../../components/User/Input/PetSizeSelection";
import SubmitButton from "../../components/Main/Submit/Submit";
import SignUpHeader from "../../components/Main/Common/SignUpHeader";
import EmailValidationCheckButton from "../../components/Main/Submit/EmailValidCheck";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("유효한 이메일을 입력하세요")
    .required("이메일을 입력하세요"),
  password: Yup.string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
    .required("비밀번호를 입력하세요"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력하세요"),
  petName: Yup.string()
    .required("반려견 이름을 입력하세요")
    .matches(/^[a-zA-Z가-힣\s]+$/, "특수문자와 숫자는 입력할 수 없습니다"),
  petWeight: Yup.string().required("반려견 몸무게를 입력하세요"),
  petSize: Yup.string().required("반려견 체고를 입력하세요"),
});

const Signup = () => {
  const [isEmailAvailable, setIsEmailAvailable] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      petName: "",
      petWeight: "",
      petSize: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      Modal.success({
        content: "회원가입되었습니다.",
      });
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
  } = formik;

  const handleOnClick = () => {
    if (!dirty || !isValid) {
      message.error("필수항목이 입력되지 않았습니다.", 2);
    } else {
      handleSubmit();
    }
  };

  return (
    <FullHeightLayout>
      <SignUpHeader />
      <StyledContent>
        <Inner>
          <FormContainer>
            <Heading>회원가입</Heading>
            <DividerWrapper>
              <StyledDivider />
            </DividerWrapper>
            <SectionTitle>가입정보 입력</SectionTitle>
            <Label>이메일</Label>
            <EmailInputContainer>
              <StyledInput
                size="large"
                placeholder="이메일을 입력하세요"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <EmailValidationCheckButton
                label="중복 확인"
                email={values.email}
                setIsEmailAvailable={setIsEmailAvailable}
              />
            </EmailInputContainer>
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            <Label>비밀번호</Label>
            <StyledPassword
              size="large"
              placeholder="비밀번호를 입력하세요"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {touched.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
            <Caution>(8자리 이상, 문자 + 숫자)</Caution>
            <Label>비밀번호 확인</Label>
            <StyledPassword
              size="large"
              placeholder="비밀번호를 확인하세요"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            )}
            <DividerWrapper>
              <StyledDivider />
            </DividerWrapper>
            <SectionTitle>반려견 정보 입력</SectionTitle>
            <Label>반려견 이름</Label>
            <StyledInput
              size="large"
              placeholder="반려견 이름을 입력해주세요"
              type="text"
              name="petName"
              value={values.petName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.petName && errors.petName && (
              <ErrorMessage>{errors.petName}</ErrorMessage>
            )}
            <Caution>(*특수문자, 숫자 불가)</Caution>
            <Label>반려견 몸무게</Label>
            <PetWeightSelectionToggle
              name="petWeight"
              value={values.petWeight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.petWeight && errors.petWeight && (
              <ErrorMessage>{errors.petWeight}</ErrorMessage>
            )}
            <Label>반려견 체고</Label>
            <PetSizeSelectionToggle
              name="petSize"
              value={values.petSize}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.petSize && errors.petSize && (
              <ErrorMessage>{errors.petSize}</ErrorMessage>
            )}
            <ButtonContainer>
              <SubmitButton
                label="회원 가입 하기"
                type="primary"
                onClick={handleOnClick}
              />
            </ButtonContainer>
          </FormContainer>
        </Inner>
      </StyledContent>
    </FullHeightLayout>
  );
};

const FullHeightLayout = styled(Layout)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; /* 배경색을 하얀색으로 변경 */
`;

const StyledContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  background-color: white; /* 폼 배경색을 흰색으로 설정 */
  padding: 20px; /* 폼 패딩 추가 */
  border-radius: 8px; /* 폼 모서리 둥글게 */
  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 폼 그림자 추가 */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-family: "Kanit";
  font-weight: 400;
  text-align: left;
  width: 100%;
  margin-top: -30px;
  margin-bottom: -30px;
`;

const SectionTitle = styled.div`
  font-size: 25px;
  font-family: "Kanit";
  font-weight: 400;
  margin-top: -30px;
`;

const StyledDivider = styled(Divider)`
  border-color: black;
`;

const DividerWrapper = styled.div`
  width: 100%;
  margin: 0;
`;

const Label = styled.span`
  font-size: 15px;
  font-family: "Kanit";
  font-weight: 400;
  margin-bottom: -10px;
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(Input)`
  flex: 1;
  height: 54px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
`;

const StyledPassword = styled(Input.Password)`
  height: 54px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const Caution = styled.div`
  font-size: 15px;
  font-family: "Kanit";
  font-weight: 400;
  color: #9b9b9b;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: -10px;
`;

export default Signup;
