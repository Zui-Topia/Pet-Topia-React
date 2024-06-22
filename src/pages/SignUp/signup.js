import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message, Layout, Input, Divider, Modal } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import PetWeightSelectionToggle from "../../components/User/Input/PetWeightSelection";
import PetSizeSelectionToggle from "../../components/User/Input/PetSizeSelection";
import SubmitButton from "../../components/Main/Submit/Submit";
import Header from "../../components/Main/Common/Header";
import EmailValidationCheckButton from "../../components/Main/Submit/EmailValidCheck";
import PostSignUpAPI from "../../api/User/PostSignUpAPI";
import { Navigate, useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [isEmailAvailable, setIsEmailAvailable] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // 회원가입 요청 중 여부 상태

  const resetEmail = (formik) => {
    formik.setFieldValue("email", "");
  };
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 기능 활성화
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
    onSubmit: async (values) => {
      console.log("values", values);
      if (!isSubmitting) {
        setIsSubmitting(true); // 회원가입 요청 시작 시 상태 변경
        try {
          const UserInfo = {
            userEmail: values.email,
            password: values.password,
            petName: values.petName,
            petWeight: values.petWeight,
            petSize: values.petSize,
          };

          console.log("UserInfo to be sent:", UserInfo); // 서버로 전송할 데이터 출력

          const response = await PostSignUpAPI(UserInfo);
          console.log("Signup response:", response); // 회원가입 API 응답 콘솔 출력

          setIsSubmitting(false); // 제출 상태를 false로 설정
          Modal.success({
            title: "회원가입 성공",
            content: "성공적으로 회원가입되었습니다",
            okText: "확인",
            onOk: () => {
              setIsSubmitting(false); // 회원가입 성공 후 상태 변경
              navigate("/login"); // 회원가입 성공 시 /login 페이지로 이동
            },
          });
        } catch (error) {
          console.error("Signup error:", error); // 오류 콘솔 출력
          setIsSubmitting(false); // 제출 상태를 false로 설정
          Modal.error({
            content:
              error.response?.data?.message ||
              "회원가입 중 오류가 발생했습니다.",
            onOk: () => {
              setIsSubmitting(false); // 회원가입 실패 후 상태 변경
            },
          });
        }
      }
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

  const handlePetWeightChange = (weight) => {
    formik.setFieldValue("petWeight", weight); // 반려견 몸무게 formik 값 설정
  };

  const handlePetSizeChange = (size) => {
    formik.setFieldValue("petSize", size); // 반려견 체고 formik 값 설정
  };

  return (
    <FullHeightLayout>
      <Header />
      <StyledContent>
        <Inner>
          <FormContainer onSubmit={handleSubmit}>
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
                disabled={isSubmitting} // 회원가입 요청 중일 때 입력 비활성화
              />
              <EmailValidationCheckButton
                label="중복 확인"
                email={values.email}
                setIsEmailAvailable={setIsEmailAvailable}
                disabled={isSubmitting} // 회원가입 요청 중일 때 버튼 비활성화
                // resetEmail={resetEmail}
                resetEmail={() => resetEmail(formik)}
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
              disabled={isSubmitting} // 회원가입 요청 중일 때 입력 비활성화
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
              disabled={isSubmitting} // 회원가입 요청 중일 때 입력 비활성화
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
              disabled={isSubmitting} // 회원가입 요청 중일 때 입력 비활성화
            />
            {touched.petName && errors.petName && (
              <ErrorMessage>{errors.petName}</ErrorMessage>
            )}
            <Label>반려견 몸무게</Label>
            <PetWeightSelectionToggle onChange={handlePetWeightChange} />
            {touched.petWeight && errors.petWeight && (
              <ErrorMessage>{errors.petWeight}</ErrorMessage>
            )}
            <Label>반려견 체고</Label>
            <PetSizeSelectionToggle onChange={handlePetSizeChange} />
            {touched.petSize && errors.petSize && (
              <ErrorMessage>{errors.petSize}</ErrorMessage>
            )}
            <ButtonContainer>
              <SubmitButton
                label="회원가입하기"
                onClick={formik.handleSubmit}
                disabled={isSubmitting}
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
