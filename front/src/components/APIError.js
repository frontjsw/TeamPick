import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { errorReset } from "../store/api-error-slice";

const APIError = ({ errorData }) => {
  console.log(errorData);
  return (
    <Wrapper>
      API ERROR: 글로벌 에러 컴포넌트 입니다. 모달창으로 만들 생각입니다.
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default APIError;
